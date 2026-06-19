import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import './HeroSection.css'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section id="inicio" className="hero">
      <div className="hero__inner">
        <FadeIn className="hero__text" delay={0}>
          <span className="hero__label">{t('hero.label')}</span>
          <h1>{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
        </FadeIn>

        <FadeIn className="hero__media-wrap" direction="right" delay={120}>
          <div className="hero__media placeholder">
            {t('hero.videoPlaceholder')}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
