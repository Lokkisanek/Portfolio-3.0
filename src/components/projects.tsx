import { categoryLabels, projects } from "@/data/portfolio";
import { MediaFrame } from "@/components/media-frame";

export function Projects() {
  return (
    <section id="projekty" className="scroll-mt-24 border-y border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-teal-400 uppercase">
          Projekty
        </h2>
        <p className="mt-3 max-w-lg text-2xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
          Vybrané realizace
        </p>

        <ul className="mt-12 space-y-10">
          {projects.map((project) => {
            const components3d = project["3d_components_potatoma"];

            return (
              <li
                key={project.id}
                className="rounded-2xl border border-white/6 bg-white/[0.02] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-300 ring-1 ring-teal-500/20">
                    {categoryLabels[project.category] ?? project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-medium text-zinc-100">{project.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500/80" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {project.results && (
                  <p className="mt-4 rounded-lg border border-teal-500/20 bg-teal-500/5 px-4 py-3 text-sm text-teal-200/90">
                    {project.results}
                  </p>
                )}

                {components3d && (
                  <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                      3D komponenty
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{components3d.software_used}</p>
                    <p className="mt-2 text-sm text-zinc-400">{components3d.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {components3d.items.map((item) => (
                        <li
                          key={item.name}
                          className="rounded-lg border border-white/5 px-3 py-2 text-xs text-zinc-400"
                          title={item.file}
                        >
                          <span className="font-medium text-zinc-300">{item.name}</span>
                          <span className="text-zinc-600"> · {item.type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {project.images.map((image, i) => (
                      <MediaFrame
                        key={image.url}
                        src={image.url}
                        alt={image.alt}
                        priority={i === 0}
                      />
                    ))}
                  </div>
                )}

                {project.media?.map((item) => (
                  <div key={item.url} className="mt-6">
                    <MediaFrame src={item.thumbnail} alt={item.alt} />
                    <p className="mt-2 text-xs text-zinc-500">
                      Video: {item.alt}
                      <span className="text-zinc-600"> — soubor {item.url}</span>
                    </p>
                  </div>
                ))}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
