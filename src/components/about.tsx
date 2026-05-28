import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="o-mne" className="scroll-mt-24 border-y border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-teal-400 uppercase">
          O mně
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {profile.bio}
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          Působím v {profile.location} — lokálně i na dálku.
        </p>
      </div>
    </section>
  );
}
