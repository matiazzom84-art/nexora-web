import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="servicios" className="bg-navy-900 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que tu negocio necesita para estar online"
            description="Soluciones simples y bien hechas para que te encuentren, te conozcan y te contacten."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 100}>
              <article className="h-full rounded-2xl border border-white/10 bg-navy-800/50 p-7 transition-colors hover:border-electric-500/40 hover:bg-navy-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-400">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}