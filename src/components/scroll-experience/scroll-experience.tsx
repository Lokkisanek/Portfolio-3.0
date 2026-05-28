"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  scrollScenes,
  SCENE_SCROLL_HEIGHT_VH,
  type ScrollScene,
} from "@/data/scroll-scenes";
import { CodePanel } from "./code-panel";
import { MobileCallouts, SideCallout } from "./side-callout";

const SceneCanvas = dynamic(
  () => import("./scene-canvas").then((m) => m.SceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(50vh,440px)] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
        <p className="text-sm text-zinc-500">Načítám 3D model…</p>
      </div>
    ),
  },
);

function SceneContent({
  scene,
  progress,
}: {
  scene: ScrollScene;
  progress: number;
}) {
  return (
    <div className="relative flex h-full flex-col justify-center px-4 py-8 sm:px-8">
      {scene.callouts.map((callout) => (
        <SideCallout
          key={`${callout.side}-${callout.at}`}
          {...callout}
          progress={progress}
          accent={scene.accent}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: scene.accent }}
        >
          {scene.serviceLabel}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {scene.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">
          {scene.subtitle}
        </p>

        <div className="mt-8">
          {scene.type === "code" ? (
            <CodePanel
              code={scene.code}
              filename={scene.filename}
              progress={progress}
              accent={scene.accent}
            />
          ) : (
            <SceneCanvas
              url={scene.modelUrl}
              scale={scene.modelScale}
              variant={scene.modelVariant}
              progress={progress}
            />
          )}
        </div>

        <MobileCallouts
          callouts={scene.callouts}
          progress={progress}
          accent={scene.accent}
        />

        <div
          className="mt-8 flex flex-col items-center gap-4 transition-all duration-500"
          style={{
            opacity: progress > 0.82 ? 1 : 0,
            transform: progress > 0.82 ? "translateY(0)" : "translateY(12px)",
            pointerEvents: progress > 0.82 ? "auto" : "none",
          }}
        >
          <Link
            href={scene.serviceHref}
            className="inline-flex h-11 items-center rounded-full px-6 text-sm font-medium text-zinc-950 transition hover:brightness-110"
            style={{ backgroundColor: scene.accent }}
          >
            Přejít na službu →
          </Link>
          <p className="text-xs text-zinc-600">Scrollujte dál pro další službu</p>
        </div>
      </div>
    </div>
  );
}

export function ScrollExperience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateScroll = useCallback(() => {
    const viewport = window.innerHeight;

    for (let i = 0; i < sectionRefs.current.length; i++) {
      const el = sectionRefs.current[i];
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const maxScroll = el.offsetHeight - viewport;

      if (rect.top <= 0 && rect.bottom >= viewport * 0.5) {
        const scrolled = -rect.top;
        const p = maxScroll > 0 ? Math.min(1, Math.max(0, scrolled / maxScroll)) : 0;
        setActiveIndex(i);
        setProgress(p);
        return;
      }
    }

    const wrapper = wrapperRef.current;
    if (wrapper) {
      const wRect = wrapper.getBoundingClientRect();
      if (wRect.top > 0) {
        setActiveIndex(0);
        setProgress(0);
      }
    }
  }, []);

  useEffect(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll]);

  const scene = scrollScenes[activeIndex];

  return (
    <section id="zazitost" ref={wrapperRef} className="relative" aria-label="Interaktivní přehled služeb">
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-[#07090d]/80 px-3 py-2 backdrop-blur-md">
        {scrollScenes.map((s, i) => (
          <span
            key={s.id}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? 24 : 6,
              backgroundColor: i === activeIndex ? s.accent : "#3f3f46",
            }}
            aria-hidden
          />
        ))}
      </div>

      <div className="sticky top-0 z-20 h-screen pt-16">
        <SceneContent scene={scene} progress={progress} />
      </div>

      {scrollScenes.map((scrollScene, index) => (
        <div
          key={scrollScene.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          aria-hidden
          style={{ height: `${SCENE_SCROLL_HEIGHT_VH}vh` }}
          data-scene={scrollScene.id}
        />
      ))}

      <div className="relative z-30 flex flex-col items-center justify-center border-t border-white/5 bg-[#07090d] px-6 py-16 text-center">
        <p className="text-sm text-teal-400">Konec interaktivního přehledu</p>
        <h2 className="mt-2 text-xl font-medium text-zinc-100 sm:text-2xl">
          Více o projektech, referencích a kontaktu
        </h2>
        <a
          href="#portfolio"
          className="mt-6 inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-sm text-zinc-200 transition hover:bg-white/5"
        >
          Pokračovat na portfolio ↓
        </a>
      </div>
    </section>
  );
}
