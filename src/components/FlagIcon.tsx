type FlagIconProps = {
  code: 'pt' | 'en' | 'es'
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
        <svg viewBox="0 0 32 24" aria-hidden="true" className="header__flag">
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
        <svg viewBox="0 0 32 24" aria-hidden="true" className="header__flag">
          <rect width="32" height="24" fill="#AA151B" />
          <rect y="6" width="32" height="12" fill="#F1BF00" />
        </svg>
      )
  }
}
