import { MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { benefits } from '../data/benefits'
import { whatsappLink } from '../data/site'

export default function Benefits() {
  return (
    <section id="beneficios" className="px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-400">
            Por qué NEXORA
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Una web que trabaja para tu negocio
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            No hacemos páginas por hacer. Cada decisión de diseño apunta a que
            más personas te encuentren, confíen en vos y te escriban.
          </p>
          <div className="mt-8">
            <Button href={whatsappLink} external>
              <MessageCircle size={20} />
              Contanos tu proyecto
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 2) * 100}>
              <article className="h-full rounded-2xl border border-white/10 bg-navy-900 p-7">
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