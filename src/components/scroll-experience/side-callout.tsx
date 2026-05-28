"use client";

import type { ScrollCallout } from "@/data/scroll-scenes";

type SideCalloutProps = ScrollCallout & {
  progress: number;
  accent: string;
};

export function SideCallout({
  at,
  side,
  title,
  text,
  progress,
  accent,
}: SideCalloutProps) {
  const distance = Math.abs(progress - at);
  const opacity = distance < 0.14 ? 1 - distance / 0.14 : 0;
  const translate =
    side === "left"
      ? opacity > 0.5
        ? "translate-x-0"
        : "-translate-x-4"
      : opacity > 0.5
        ? "translate-x-0"
        : "translate-x-4";

  if (opacity <= 0.01) return null;

  return (
    <div
      className={`pointer-events-none absolute top-1/2 z-20 hidden w-56 -translate-y-1/2 transition-all duration-300 lg:block xl:w-64 ${
        side === "left" ? "left-4 xl:left-8" : "right-4 xl:right-8"
      } ${translate}`}
      style={{ opacity }}
    >
      <div
        className="rounded-xl border border-white/10 bg-[#07090d]/90 p-4 backdrop-blur-md"
        style={{ boxShadow: `0 0 40px ${accent}22` }}
      >
        <p className="text-sm font-medium text-zinc-100">{title}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{text}</p>
      </div>
    </div>
  );
}

type MobileCalloutsProps = {
  callouts: ScrollCallout[];
  progress: number;
  accent: string;
};

export function MobileCallouts({ callouts, progress, accent }: MobileCalloutsProps) {
  const active = callouts.reduce<(ScrollCallout & { opacity: number }) | null>(
    (best, c) => {
      const distance = Math.abs(progress - c.at);
      const opacity = distance < 0.18 ? 1 - distance / 0.18 : 0;
      if (opacity > (best?.opacity ?? 0)) return { ...c, opacity };
      return best;
    },
    null,
  );

  if (!active || active.opacity < 0.2) return null;

  return (
    <div
      className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:hidden"
      style={{ opacity: active.opacity, borderColor: `${accent}44` }}
    >
      <p className="text-sm font-medium text-zinc-100">{active.title}</p>
      <p className="mt-1 text-xs text-zinc-400">{active.text}</p>
    </div>
  );
}
