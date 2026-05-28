import { profile } from "@/data/profile";
import { IconMapPin } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-500">
          <IconMapPin className="h-4 w-4 text-teal-500/80" />
          {profile.location}
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl sm:leading-[1.1]">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-teal-300/90 sm:text-xl">
          {profile.title}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
          {profile.bio} Nabízím tvorbu webů a lokální SEO, integraci chytré domácnosti
          (Home Assistant, Apple Home), letecké práce dronem s licencí A1/A3 a servis PC
          a iPhone v celé České republice.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-500 px-7 text-sm font-medium text-zinc-950 transition hover:bg-teal-400"
          >
            Napište mi
          </a>
          <a
            href={profile.contact.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-7 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
          >
            matyas.online
          </a>
        </div>
      </div>
    </section>
  );
}
