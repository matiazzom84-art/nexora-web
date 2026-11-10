import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section id="proceso" className="bg-navy-900 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo trabajamos, paso a paso"
            description="Un camino claro desde la primera consulta hasta que tu web está online."
          />
        </Reveal>

        <Reveal>
          <ol className="mt-14">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-5 pb-10 last:pb-0"
              >
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute left-[19px] top-10 h-full w-px bg-white/10"
                    aria-hidden="true"
                  />
                )}
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-electric-500/40 bg-navy-800 font-bold text-electric-400">
                  {index + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}