import { profile } from "@/data/profile";
import {
  IconGitHub,
  IconGlobe,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconPhone,
} from "@/components/icons";

const socialLinks = [
  { href: profile.socials.github, label: "GitHub", icon: IconGitHub },
  { href: profile.socials.linkedin, label: "LinkedIn", icon: IconLinkedIn },
  { href: profile.socials.instagram, label: "Instagram", icon: IconInstagram },
] as const;

export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-teal-400 uppercase">
          Kontakt
        </h2>
        <p className="mt-3 text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
          Pojďme něco postavit
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex flex-col gap-3 rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition hover:border-teal-500/20 hover:bg-teal-500/[0.03]"
          >
            <IconMail className="h-5 w-5 text-teal-400" />
            <span className="text-xs tracking-wider text-zinc-500 uppercase">E-mail</span>
            <span className="text-sm text-zinc-200 break-all">{profile.contact.email}</span>
          </a>

          <a
            href={profile.contact.phoneHref}
            className="flex flex-col gap-3 rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition hover:border-teal-500/20 hover:bg-teal-500/[0.03]"
          >
            <IconPhone className="h-5 w-5 text-teal-400" />
            <span className="text-xs tracking-wider text-zinc-500 uppercase">Telefon</span>
            <span className="text-sm text-zinc-200">{profile.contact.phone}</span>
          </a>

          <a
            href={profile.contact.web}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition hover:border-teal-500/20 hover:bg-teal-500/[0.03]"
          >
            <IconGlobe className="h-5 w-5 text-teal-400" />
            <span className="text-xs tracking-wider text-zinc-500 uppercase">Web</span>
            <span className="text-sm text-zinc-200">matyas.online</span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-teal-500/30 hover:text-teal-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
