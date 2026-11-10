import { navLinks } from '../data/navigation'
import { whatsappLink } from '../data/site'
import Logo from './Logo'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Microagencia digital de Mendoza. Páginas web modernas para
              negocios que quieren crecer online.
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-white">Contacto</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-slate-400 transition-colors hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {currentYear} NEXORA Digital Studio. Mendoza, Argentina.
        </div>
      </div>
    </footer>
  )
}