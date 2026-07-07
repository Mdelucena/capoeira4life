import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FlagIcon from './FlagIcon'
import { languages, type Language } from '../i18n'
import './Header.css'

type HeaderProps = {
  overlay?: boolean
}

const navItems = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.capoeiraNago', to: '/capoeira-nago' },
  { key: 'nav.capoeirinha', to: '/capoeirinha' },
  { key: 'nav.coaches', to: '/professores' },
  { key: 'nav.academy', to: '/academia' },
  { key: 'nav.products', to: '/produtos' },
  { key: 'nav.events', to: '/eventos' },
] as const

function linkClassName(isActive: boolean) {
  return isActive ? 'header__link header__link--active' : 'header__link'
}

export default function Header({ overlay = false }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const currentLang = i18n.language as Language

  function changeLanguage(code: Language) {
    i18n.changeLanguage(code)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${overlay ? 'header--overlay' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img src="/logo.png" alt={t('a11y.logoAlt')} />
        </Link>

        <button
          type="button"
          className="header__menu-btn"
          aria-label={t('a11y.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => linkClassName(isActive)}
                  aria-current={undefined}
                  onClick={closeMenu}
                >
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header__divider" aria-hidden="true" />

          <div className="header__lang" role="group" aria-label={t('language.label')}>
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                className={`header__lang-btn ${currentLang === code ? 'header__lang-btn--active' : ''}`}
                onClick={() => changeLanguage(code)}
                aria-pressed={currentLang === code}
                aria-label={t(`language.${code}`)}
                title={t(`language.${code}`)}
              >
                <FlagIcon code={code} />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
