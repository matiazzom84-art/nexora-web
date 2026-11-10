import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-navy-900 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Ejemplos de lo que podemos construir"
            description="Estamos arrancando. Estos son proyectos conceptuales: demostraciones creadas por NEXORA para mostrar cómo trabajamos, no clientes reales."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {projects.map(
            ({ icon: Icon, title, category, description, url }, index) => (
              <Reveal key={title} delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-800/50 p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      Proyecto conceptual
                    </span>
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-electric-400">
                    {category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-slate-400">
                    {description}
                  </p>

                  <div className="mt-6">
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-electric-400 transition-colors hover:text-electric-300"
                      >
                        Ver demo
                        <ArrowUpRight size={18} />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-500">
                        Próximamente
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  )
}