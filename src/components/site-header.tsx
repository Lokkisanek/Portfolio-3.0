import { profile } from "@/data/profile";

const nav = [
  { href: "/#zazitost", label: "Prohlídka" },
  { href: "/sluzby", label: "Služby" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07090d]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="text-sm font-medium tracking-wide text-zinc-100">
          {profile.name.split(" ")[0]}
          <span className="text-teal-400">.</span>
        </a>
        <nav className="hidden gap-8 sm:flex" aria-label="Hlavní navigace">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300 ring-1 ring-teal-500/30 transition hover:bg-teal-500/20"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}
