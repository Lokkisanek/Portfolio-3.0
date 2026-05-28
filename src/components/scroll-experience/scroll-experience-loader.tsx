"use client";

import dynamic from "next/dynamic";

export const ScrollExperienceLoader = dynamic(
  () =>
    import("./scroll-experience").then((m) => m.ScrollExperience),
  {
    ssr: false,
    loading: () => (
      <section
        id="zazitost"
        className="flex min-h-screen items-center justify-center border-y border-white/5"
      >
        <p className="text-sm text-zinc-500">Načítám interaktivní prohlídku…</p>
      </section>
    ),
  },
);
