import { MapPin, MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { whatsappLink } from '../data/site'

export default function Contact() {
  return (
    <section id="contacto" className="bg-navy-900 px-6 py-20 lg:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-navy-800/60 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric-400">
              Contacto
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
              Contame qué necesita tu negocio. La primera charla es sin
              compromiso y te respondo por WhatsApp.
            </p>

            <div className="mt-9 flex justify-center">
              <Button href={whatsappLink} external>
                <MessageCircle size={20} />
                Escribime por WhatsApp
              </Button>
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
              <MapPin size={16} className="text-electric-400" />
              Mendoza, Argentina · Trabajo con negocios de todo el país
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}