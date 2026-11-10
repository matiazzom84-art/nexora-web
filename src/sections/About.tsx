import { GraduationCap, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { about } from '../data/about'

export default function About() {
  return (
    <section id="nosotros" className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-electric-500/30 bg-electric-500/10 text-4xl font-extrabold tracking-wider text-electric-400 sm:h-40 sm:w-40 sm:text-5xl">
                {about.initials}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{about.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{about.role}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-electric-400" />
                  Estudiante en la UNCuyo
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} className="text-electric-400" />
                  Mendoza, Argentina
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="text-sm font-semibold uppercase tracking-widest text-electric-400">
              Sobre NEXORA
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Detrás de cada web hay una persona que te escucha
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-400">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {about.values.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 100}>
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