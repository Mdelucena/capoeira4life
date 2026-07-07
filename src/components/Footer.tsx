import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import capoeiraNagoLogo from '../assets/image/capoeira nago.png'
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY, YOUTUBE_URL, getWhatsAppUrl } from '../config/contact'
import FadeIn from './FadeIn'
import './Footer.css'

const footerLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.capoeiraNago', to: '/capoeira-nago' },
  { key: 'nav.capoeirinha', to: '/capoeirinha' },
  { key: 'nav.coaches', to: '/professores' },
  { key: 'nav.academy', to: '/academia' },
  { key: 'nav.products', to: '/produtos' },
  { key: 'nav.events', to: '/eventos' },
] as const

const socialLinks = [
  { name: 'Instagram', href: INSTAGRAM_URL, icon: 'instagram' },
  { name: 'YouTube', href: YOUTUBE_URL, icon: 'youtube' },
] as const

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer__whatsapp-icon">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

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
        <FadeIn className="footer__col" delay={0}>
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

        <FadeIn className="footer__col" delay={80}>
          <h3 className="footer__title">{t('footer.contactTitle')}</h3>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer__highlight">
            {CONTACT_EMAIL}
          </a>
          <a
            href={getWhatsAppUrl()}
            className="footer__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {WHATSAPP_DISPLAY}
          </a>
          <p className="footer__muted">{t('footer.contactHint')}</p>
        </FadeIn>

        <FadeIn className="footer__col" delay={160}>
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
          <FadeIn className="footer__brand" delay={200}>
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
          <p className="footer__copyright">
            {t('footer.rights', { year })}
          </p>
        </div>
      </div>
    </footer>
  )
}
