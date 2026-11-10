export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="NEXORA, ir al inicio">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="#2f6bff" />
        <path
          d="M10 23V9l12 14V9"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-extrabold tracking-[0.18em] text-white">NEXORA</span>
    </a>
  )
}