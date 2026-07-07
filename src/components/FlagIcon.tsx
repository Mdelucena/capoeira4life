import type { Language } from '../i18n'

type FlagIconProps = {
  code: Language
}

export default function FlagIcon({ code }: FlagIconProps) {
  switch (code) {
    case 'pt':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true" className="header__flag">
          <rect width="32" height="24" fill="#009B3A" />
          <polygon points="16,2 30,12 16,22 2,12" fill="#FEDF00" />
          <circle cx="16" cy="12" r="5" fill="#002776" />
        </svg>
      )
    case 'en':
      return (
        <svg viewBox="0 0 60 30" aria-hidden="true" className="header__flag">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      )
    case 'es':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true" className="header__flag">
          <rect width="32" height="24" fill="#AA151B" />
          <rect y="6" width="32" height="12" fill="#F1BF00" />
        </svg>
      )
    case 'it':
      return (
        <svg viewBox="0 0 32 24" aria-hidden="true" className="header__flag">
          <rect width="10.67" height="24" fill="#009246" />
          <rect x="10.67" width="10.66" height="24" fill="#fff" />
          <rect x="21.33" width="10.67" height="24" fill="#CE2B37" />
        </svg>
      )
  }
}
