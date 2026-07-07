import './CountryFlag.css'

export type CountryCode = 'br' | 'us' | 'es' | 'gb' | 'mt' | 'de' | 'at' | 'it'

type CountryFlagProps = {
  code: CountryCode
  label: string
  className?: string
}

export default function CountryFlag({ code, label, className = '' }: CountryFlagProps) {
  return (
    <span
      className={`country-flag ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      {renderFlag(code)}
    </span>
  )
}

function renderFlag(code: CountryCode) {
  switch (code) {
    case 'br':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="32" height="24" fill="#009B3A" />
          <polygon points="16,2 30,12 16,22 2,12" fill="#FEDF00" />
          <circle cx="16" cy="12" r="5" fill="#002776" />
        </svg>
      )
    case 'us':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="32" height="24" fill="#B22234" />
          <rect y="2" width="32" height="2" fill="#fff" />
          <rect y="6" width="32" height="2" fill="#fff" />
          <rect y="10" width="32" height="2" fill="#fff" />
          <rect y="14" width="32" height="2" fill="#fff" />
          <rect y="18" width="32" height="2" fill="#fff" />
          <rect y="22" width="32" height="2" fill="#fff" />
          <rect width="14" height="13" fill="#3C3B6E" />
        </svg>
      )
    case 'es':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="32" height="24" fill="#AA151B" />
          <rect y="6" width="32" height="12" fill="#F1BF00" />
        </svg>
      )
    case 'gb':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="32" height="24" fill="#012169" />
          <path d="M0 0 L32 24 M32 0 L0 24" stroke="#fff" strokeWidth="4" />
          <path d="M0 0 L32 24 M32 0 L0 24" stroke="#C8102E" strokeWidth="2" />
          <path d="M16 0 V24 M0 12 H32" stroke="#fff" strokeWidth="6" />
          <path d="M16 0 V24 M0 12 H32" stroke="#C8102E" strokeWidth="3" />
        </svg>
      )
    case 'mt':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="16" height="24" fill="#fff" />
          <rect x="16" width="16" height="24" fill="#CF142B" />
        </svg>
      )
    case 'de':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="32" height="8" fill="#000" />
          <rect y="8" width="32" height="8" fill="#DD0000" />
          <rect y="16" width="32" height="8" fill="#FFCE00" />
        </svg>
      )
    case 'at':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="32" height="24" fill="#ED2939" />
          <rect y="8" width="32" height="8" fill="#fff" />
        </svg>
      )
    case 'it':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <rect width="10.67" height="24" fill="#009246" />
          <rect x="10.67" width="10.66" height="24" fill="#fff" />
          <rect x="21.33" width="10.67" height="24" fill="#CE2B37" />
        </svg>
      )
  }
}
