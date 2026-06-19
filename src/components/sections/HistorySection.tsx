import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import capoeiraImg from '../../assets/image/capoeira.png'
import './HistorySection.css'

export default function HistorySection() {
  const { t } = useTranslation()

  return (
    <section id="historia" className="history">
      <div className="history__split">
        <div className="history__text">
          <FadeIn delay={0}>
            <div className="history__header">
              <span className="history__label">{t('history.label')}</span>
              <h2 className="history__title">{t('history.title')}</h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <blockquote className="history__lead">{t('history.lead')}</blockquote>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="history__body">{t('history.body')}</p>
          </FadeIn>

          <FadeIn delay={360}>
            <a href="#mestres" className="history__cta">
              {t('history.cta')}
              <span className="history__cta-arrow" aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>

        <FadeIn className="history__media" direction="right" delay={160}>
          <img
            src={capoeiraImg}
            alt={t('history.imageAlt')}
            className="history__image"
          />
        </FadeIn>
      </div>
    </section>
  )
}
