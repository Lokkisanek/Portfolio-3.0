"use client";

type CodePanelProps = {
  code: string;
  filename: string;
  progress: number;
  accent: string;
};

export function CodePanel({ code, filename, progress, accent }: CodePanelProps) {
  const visibleLength = Math.floor(code.length * Math.min(1, Math.max(0, progress)));
  const visible = code.slice(0, visibleLength);
  const lines = visible.split("\n");

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/40 ring-1 ring-white/5">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 font-mono text-xs text-zinc-500">{filename}</span>
        <span
          className="ml-auto font-mono text-xs"
          style={{ color: accent }}
        >
          {Math.round(progress * 100)}%
        </span>
      </div>
      <pre className="max-h-[min(52vh,420px)] overflow-auto p-4 font-mono text-[11px] leading-relaxed sm:text-xs md:text-sm">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-6 shrink-0 select-none text-right text-zinc-600">
                {i + 1}
              </span>
              <span className="text-zinc-300">
                {line}
                {i === lines.length - 1 && progress < 1 && (
                  <span
                    className="ml-0.5 inline-block h-4 w-2 animate-pulse align-middle"
                    style={{ backgroundColor: accent }}
                  />
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
