import Link from "next/link";
import { services } from "@/data/portfolio";
import { profile } from "@/data/profile";
import { getServiceSeo } from "@/data/seo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Služby v patičce">
          <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
            Služby
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {services.map((service) => {
              const seo = getServiceSeo(service);
              return (
                <li key={service.id}>
                  <Link
                    href={`/sluzby/${service.id}`}
                    className="text-sm text-zinc-500 hover:text-teal-400"
                  >
                    {seo.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/sluzby" className="text-sm text-zinc-500 hover:text-teal-400">
                Všechny služby
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-600 sm:flex-row sm:items-center">
          <p>
            © {year} {profile.name}
          </p>
          <p>Web & SEO · Smart home · Drony · PC & iPhone servis · Česká republika</p>
        </div>
      </div>
    </footer>
  );
}
