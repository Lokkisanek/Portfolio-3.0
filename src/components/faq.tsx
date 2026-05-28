type FaqItem = { question: string; answer: string };

type FaqProps = {
  items: readonly FaqItem[];
  title?: string;
  id?: string;
};

export function Faq({
  items,
  title = "Časté dotazy",
  id = "faq",
}: FaqProps) {
  if (items.length === 0) return null;

  return (
    <section id={id} className="scroll-mt-24 px-6 py-24" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-3xl">
        <h2
          id={`${id}-heading`}
          className="text-sm font-medium tracking-widest text-teal-400 uppercase"
        >
          {title}
        </h2>

        <dl className="mt-10 space-y-4">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/6 bg-white/[0.02] p-5"
            >
              <dt className="text-base font-medium text-zinc-100">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-400">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
