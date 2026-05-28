import { profile } from "@/data/profile";
import { IconMapPin } from "@/components/icons";

export function IntroStrip() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-center px-6 pt-24 pb-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-500">
          <IconMapPin className="h-4 w-4 text-teal-500/80" />
          {profile.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-teal-300/90">{profile.title}</p>
        <p className="mt-6 max-w-lg text-sm text-zinc-500">
          Scrollujte dolů — postupně uvidíte webový vývoj, servis iPhone, smart home a
          letecké práce. Na konci najdete projekty a kontakt.
        </p>
        <a
          href="#zazitost"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300"
        >
          <span className="animate-bounce" aria-hidden>
            ↓
          </span>
          Začít prohlídku služeb
        </a>
      </div>
    </section>
  );
}
