import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
  children: ReactNode
}

const styles = {
  primary:
    'bg-electric-500 text-white shadow-lg shadow-electric-500/25 hover:bg-electric-400',
  secondary:
    'border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10',
}

export default function Button({
  href,
  variant = 'primary',
  external = false,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
    </a>
  )
}