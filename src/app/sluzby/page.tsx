import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/data/portfolio";
import { buildServicesIndexMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { getServiceSeo, siteUrl } from "@/data/seo";

export const metadata: Metadata = buildServicesIndexMetadata();

export default function ServicesIndexPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Domů", url: siteUrl },
    { name: "Služby", url: `${siteUrl}/sluzby` },
  ]);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumb }} />
      <SiteHeader />
      <main className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Služby v České republice
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Kompletní nabídka pro firmy i domácnosti — každá služba má vlastní stránku
            optimalizovanou pro vyhledávače.
          </p>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const seo = getServiceSeo(service);
              return (
                <li key={service.id}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition hover:border-teal-500/20">
                    <h2 className="text-lg font-medium text-zinc-100">{seo.h1}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                      {seo.description}
                    </p>
                    <Link
                      href={`/sluzby/${service.id}`}
                      className="mt-5 text-sm font-medium text-teal-400 hover:text-teal-300"
                    >
                      Detail služby →
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>

          <p className="mt-10">
            <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-300">
              ← Zpět na portfolio
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
