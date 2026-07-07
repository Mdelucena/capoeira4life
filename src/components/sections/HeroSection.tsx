import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import './HeroSection.css'

export default function HeroSection() {
  const { t } = useTranslation()
  const intro = t('hero.body', { returnObjects: true }) as string[]

  return (
    <section id="inicio" className="hero">
      <FadeIn className="hero__video-wrap" delay={0}>
        <div className="hero__media placeholder">
          {t('hero.videoPlaceholder')}
        </div>
      </FadeIn>

      <div className="hero__intro">
        <FadeIn delay={120}>
          <span className="hero__label">{t('hero.label')}</span>
          <h1>{t('hero.title')}</h1>
          <p className="hero__lead">{t('hero.lead')}</p>
        </FadeIn>

        {intro.map((paragraph, i) => (
          <FadeIn key={paragraph.slice(0, 40)} delay={200 + i * 80}>
            <p className="hero__body">{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
