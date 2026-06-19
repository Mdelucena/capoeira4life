import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import capoeiraNagoLogo from '../assets/image/capoeira nago.png'
import { CONTACT_EMAIL, INSTAGRAM_URL, YOUTUBE_URL } from '../config/contact'
import FadeIn from './FadeIn'
import './Footer.css'

const footerLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.capoeiraNago', to: '/capoeira-nago' },
  { key: 'nav.capoeirinha', to: '/capoeirinha' },
  { key: 'nav.masters', to: '/#mestres' },
  { key: 'nav.academy', to: '/#academia' },
  { key: 'nav.bookClass', to: '/#aulas' },
] as const

const socialLinks = [
  { name: 'Instagram', href: INSTAGRAM_URL, icon: 'instagram' },
  { name: 'YouTube', href: YOUTUBE_URL, icon: 'youtube' },
] as const

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm6-1.25a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 18 6.25z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.6 7.2a2.75 2.75 0 0 0-1.94-1.94C17.74 5 12 5 12 5s-5.74 0-7.66.26A2.75 2.75 0 0 0 2.4 7.2 28.8 28.8 0 0 0 2.14 12a28.8 28.8 0 0 0 .26 4.8 2.75 2.75 0 0 0 1.94 1.94C6.26 19 12 19 12 19s5.74 0 7.66-.26a2.75 2.75 0 0 0 1.94-1.94A28.8 28.8 0 0 0 21.86 12a28.8 28.8 0 0 0-.26-4.8zM10 15.5v-7l6 3.5z" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__main container">
        <FadeIn className="footer__brand" delay={0}>
          <Link to="/" className="footer__logo-link">
            <img src="/logo.png" alt={t('a11y.logoAlt')} className="footer__logo" />
          </Link>
          <Link to="/capoeira-nago">
            <img
              src={capoeiraNagoLogo}
              alt={t('footer.nagoAlt')}
              className="footer__logo footer__logo--nago"
            />
          </Link>
        </FadeIn>

        <FadeIn className="footer__col" delay={80}>
          <h3 className="footer__title">{t('footer.exploreTitle')}</h3>
          <ul className="footer__links">
            {footerLinks.map((link) => (
              <li key={link.to}>
                {link.to.startsWith('/#') ? (
                  <a href={link.to}>{t(link.key)}</a>
                ) : (
                  <Link to={link.to}>{t(link.key)}</Link>
                )}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="footer__col" delay={160}>
          <h3 className="footer__title">{t('footer.contactTitle')}</h3>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer__highlight">
            {CONTACT_EMAIL}
          </a>
          <p className="footer__muted">{t('footer.contactHint')}</p>
        </FadeIn>

        <FadeIn className="footer__col" delay={240}>
          <h3 className="footer__title">{t('footer.locationTitle')}</h3>
          <p className="footer__muted">{t('footer.locationText')}</p>
          <div className="footer__social">
            <span className="footer__social-label">{t('footer.followUs')}</span>
            <div className="footer__social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer__social-btn"
                  aria-label={social.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copyright">
            {t('footer.rights', { year })}
          </p>
        </div>
      </div>
    </footer>
  )
}
