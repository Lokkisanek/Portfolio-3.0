import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Service } from "@/data/portfolio";
import { getServiceById, getServiceSeo, serviceIds } from "@/data/seo";
import { buildServiceMetadata } from "@/lib/seo/metadata";
import { buildServicePageJsonLd } from "@/lib/seo/json-ld";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return serviceIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return {};
  return buildServiceMetadata(service, getServiceSeo(service));
}

function ServiceDetailLists({ service }: { service: Service }) {
  return (
    <>
      {service.technologies && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-zinc-300">Technologie</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <li
                key={t}
                className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs text-teal-300 ring-1 ring-teal-500/20"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.sub_services && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-zinc-300">Co nabízím</h2>
          <ul className="mt-3 space-y-2">
            {service.sub_services.map((item) => (
              <li key={item} className="text-sm text-zinc-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.supported_ecosystems && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-zinc-300">Ekosystémy</h2>
          <ul className="mt-3 space-y-3">
            {service.supported_ecosystems.map((eco) => (
              <li
                key={eco.name}
                className="rounded-lg border border-white/5 p-3 text-sm"
              >
                <strong className="text-zinc-200">{eco.name}</strong>
                <p className="mt-1 text-zinc-500">{eco.level}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {service.equipment_and_trust && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-zinc-300">Certifikace & důvěra</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {Object.entries(service.equipment_and_trust).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      {service.guarantees && (
        <div className="mt-8">
          <h2 className="text-sm font-medium text-zinc-300">Záruky</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {service.guarantees.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const seo = getServiceSeo(service);

  return (
    <>
      <JsonLd data={buildServicePageJsonLd(service, seo)} />
      <SiteHeader />
      <main className="px-6 pt-28 pb-12">
        <article className="mx-auto max-w-3xl">
          <nav className="text-sm text-zinc-500" aria-label="Drobečková navigace">
            <Link href="/" className="hover:text-zinc-300">
              Domů
            </Link>
            <span className="mx-2">/</span>
            <Link href="/sluzby" className="hover:text-zinc-300">
              Služby
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-400">{seo.title}</span>
          </nav>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {seo.h1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">{seo.intro}</p>
          <p className="mt-4 text-sm text-zinc-500">{service.description}</p>

          <ServiceDetailLists service={service} />

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center rounded-full bg-teal-500 px-7 text-sm font-medium text-zinc-950 hover:bg-teal-400"
            >
              Nezávazná poptávka
            </Link>
            <Link
              href="/sluzby"
              className="inline-flex h-12 items-center rounded-full border border-white/10 px-7 text-sm text-zinc-200 hover:bg-white/5"
            >
              Všechny služby
            </Link>
          </div>
        </article>
      </main>
      <Faq items={seo.faq} title={`Časté dotazy — ${seo.title}`} id="faq-sluzba" />
      <SiteFooter />
    </>
  );
}
