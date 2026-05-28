import { testimonials } from "@/data/portfolio";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Hodnocení ${rating} z 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-amber-400" : "text-zinc-700"}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reference" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-teal-400 uppercase">
          Reference
        </h2>
        <p className="mt-3 max-w-lg text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
          Co říkají klienti
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((item) => (
            <li
              key={item.client_name}
              className="flex flex-col rounded-2xl border border-white/6 bg-white/[0.02] p-6"
            >
              <Stars rating={item.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                „{item.text}"
              </blockquote>
              <footer className="mt-6 border-t border-white/5 pt-4">
                <p className="text-sm font-medium text-zinc-100">{item.client_name}</p>
                <p className="text-xs text-zinc-500">{item.company}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
