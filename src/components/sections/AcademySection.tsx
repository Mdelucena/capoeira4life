import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import aboutImg from '../../assets/image/about.jpeg'
import './AcademySection.css'

export default function AcademySection() {
  const { t } = useTranslation()

  const highlights = t('academy.highlights', { returnObjects: true }) as {
    title: string
    text: string
  }[]

  return (
    <section id="academia" className="academy">
      <div className="container academy__inner">
        <FadeIn delay={0}>
          <div className="academy__header">
            <span className="academy__label">{t('academy.label')}</span>
            <h2 className="academy__title">{t('academy.title')}</h2>
          </div>
        </FadeIn>

        <div className="academy__split">
          <FadeIn className="academy__media" direction="left" delay={80}>
            <div className="academy__frame">
              <img
                src={aboutImg}
                alt={t('academy.imageAlt')}
                className="academy__photo"
              />
            </div>
          </FadeIn>

          <div className="academy__prose">
            <FadeIn delay={120}>
              <p className="academy__lead">{t('academy.lead')}</p>
            </FadeIn>
            {(t('academy.body', { returnObjects: true }) as string[]).map((paragraph, i) => (
              <FadeIn key={paragraph.slice(0, 40)} delay={180 + i * 70}>
                <p className="academy__body">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="academy__highlights">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={260 + i * 80}>
              <article className="academy__highlight">
                <h3 className="academy__highlight-title">{item.title}</h3>
                <p className="academy__highlight-text">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
