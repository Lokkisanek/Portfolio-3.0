"use client";

import Image from "next/image";
import { useState } from "react";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function MediaFrame({ src, alt, className = "", priority }: MediaFrameProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex aspect-video items-end rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 ring-1 ring-white/10 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs leading-snug text-zinc-500">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-lg ring-1 ring-white/10 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
