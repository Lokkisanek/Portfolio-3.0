import { portfolioMeta } from "@/data/portfolio";

const badges = [
  { label: "Licence dronů A1/A3", detail: "Legální letecké práce" },
  { label: "Pojištění odpovědnosti", detail: "Bezpečné realizace" },
  { label: "Záruka na opravy", detail: "Prémiové díly & dokumentace" },
  { label: "Lokální SEO", detail: "Viditelnost ve vyhledávání" },
];

export function TrustBar() {
  if (!portfolioMeta.trustIndexOptimized) return null;

  return (
    <section
      className="border-y border-white/5 bg-white/[0.01] px-6 py-10"
      aria-label="Důvěryhodnost"
    >
      <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {badges.map((badge) => (
          <li key={badge.label}>
            <p className="text-sm font-medium text-zinc-200">{badge.label}</p>
            <p className="mt-1 text-xs text-zinc-500">{badge.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
