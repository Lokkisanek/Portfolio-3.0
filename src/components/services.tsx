import Link from "next/link";
import {
  formatTrustKey,
  services,
  type Service,
} from "@/data/portfolio";
import { getServiceSeo } from "@/data/seo";

function TagList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-300/90 ring-1 ring-teal-500/20"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items, title }: { items: readonly string[]; title: string }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">{title}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500/80" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const seo = getServiceSeo(service);

  return (
    <li>
      <article className="group flex h-full flex-col rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition hover:border-teal-500/20 hover:bg-teal-500/[0.03]">
      <h3 className="text-lg font-medium leading-snug text-zinc-100">
        <Link href={`/sluzby/${service.id}`} className="hover:text-teal-300">
          {service.category}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.description}</p>

      {service.technologies && (
        <div className="mt-5">
          <TagList items={service.technologies} label="Technologie" />
        </div>
      )}

      {service.sub_services && (
        <div className="mt-5">
          <BulletList items={service.sub_services} title="Co nabízím" />
        </div>
      )}

      {service.supported_ecosystems && (
        <div className="mt-5 space-y-3">
          <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
            Podporované ekosystémy
          </p>
          {service.supported_ecosystems.map((eco) => (
            <div key={eco.name} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <p className="text-sm font-medium text-zinc-200">{eco.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{eco.level}</p>
            </div>
          ))}
        </div>
      )}

      {service.equipment_and_trust && (
        <dl className="mt-5 grid gap-2 sm:grid-cols-3">
          {Object.entries(service.equipment_and_trust).map(([key, value]) => (
            <div
              key={key}
              className="rounded-lg border border-amber-500/10 bg-amber-500/5 p-3"
            >
              <dt className="text-xs font-medium text-amber-400/90 uppercase">
                {formatTrustKey(key)}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-zinc-400">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {service.guarantees && (
        <div className="mt-5">
          <BulletList items={service.guarantees} title="Záruky & standard práce" />
        </div>
      )}

      <Link
        href={`/sluzby/${service.id}`}
        className="mt-6 text-sm font-medium text-teal-400 hover:text-teal-300"
        aria-label={`Více o službě ${seo.title}`}
      >
        Detail služby →
      </Link>
      </article>
    </li>
  );
}

export function Services() {
  return (
    <section id="sluzby" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-teal-400 uppercase">
          Služby
        </h2>
        <p className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
          Od webu přes chytrou domácnost až po drony a hardware
        </p>
        <p className="mt-3 max-w-xl text-sm text-zinc-500">
          Komplexní nabídka pro firmy i domácnosti — s důrazem na kvalitu, certifikace a
          transparentní komunikaci.{" "}
          <Link href="/sluzby" className="text-teal-400 hover:text-teal-300">
            Přehled všech služeb →
          </Link>
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
