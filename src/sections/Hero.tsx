import { ArrowRight, MapPin, MessageCircle, Smartphone } from 'lucide-react'
import Button from '../components/Button'
import { whatsappLink } from '../data/site'

const highlights = [
  { icon: Smartphone, text: 'Diseño adaptable a celulares' },
  { icon: MessageCircle, text: 'Botón directo a WhatsApp' },
  { icon: MapPin, text: 'Desde Mendoza para toda Argentina' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="animate-fade-up motion-reduce:animate-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-electric-300">
            <span className="h-2 w-2 rounded-full bg-electric-400" />
            Microagencia digital · Mendoza
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Páginas web que hacen que tus clientes{' '}
            <span className="text-electric-400">te escriban</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Diseñamos sitios modernos, rápidos y pensados para el celular, con
            contacto directo por WhatsApp. Para comercios, barberías,
            restaurantes y gimnasios que quieren verse profesionales online.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappLink} external>
              <MessageCircle size={20} />
              Quiero mi página web
            </Button>
            <Button href="#servicios" variant="secondary">
              Ver servicios
              <ArrowRight size={18} />
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon size={18} className="text-electric-400" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:200ms] motion-reduce:animate-none">
          <div className="rounded-2xl border border-white/10 bg-navy-900 p-2 shadow-2xl shadow-electric-500/10">
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
            </div>

            <div className="space-y-4 rounded-xl bg-navy-950 p-5 sm:p-6">
              <div className="h-3 w-24 rounded-full bg-white/10" />
              <div className="h-7 w-3/4 rounded-lg bg-white/15" />
              <div className="h-7 w-1/2 rounded-lg bg-electric-500/60" />
              <div className="h-3 w-full rounded-full bg-white/5" />
              <div className="h-3 w-5/6 rounded-full bg-white/5" />
              <div className="flex gap-3 pt-2">
                <div className="h-10 w-32 rounded-full bg-electric-500" />
                <div className="h-10 w-24 rounded-full border border-white/15" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="h-24 rounded-xl bg-navy-800" />
                <div className="h-24 rounded-xl bg-navy-800" />
                <div className="h-24 rounded-xl bg-navy-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}