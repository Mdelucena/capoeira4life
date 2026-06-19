import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import './AboutSection.css'

export default function AboutSection() {
  const { t } = useTranslation()

  const cards = [
    { key: 'values', title: t('about.values'), text: t('about.valuesText') },
    { key: 'mission', title: t('about.mission'), text: t('about.missionText') },
    { key: 'vision', title: t('about.vision'), text: t('about.visionText') },
  ] as const

  return (
    <section id="sobre" className="about section">
      <div className="container">
        <FadeIn delay={0}>
          <h2 className="section-title about__title">
            <span>{t('about.titleLine1')}</span>
            <span>{t('about.titleLine2')}</span>
          </h2>
        </FadeIn>
        <div className="about__grid">
          {cards.map((card, index) => (
            <FadeIn key={card.key} className="about__card" delay={120 + index * 100}>
              <h3>{card.title}</h3>
              <p className="about__text">{card.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
