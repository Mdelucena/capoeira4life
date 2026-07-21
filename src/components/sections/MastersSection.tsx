import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import bimbaImg from '../../assets/image/mestrebimba.jpg'
import pastinhaImg from '../../assets/image/mestrepastinha.jpg'
import './MastersSection.css'

export default function MastersSection() {
  const { t } = useTranslation()

  return (
    <section id="mestres" className="masters">
      <div className="container masters__inner">
        <FadeIn className="masters__intro" delay={0}>
          <span className="masters__section-label">{t('masters.label')}</span>
          <h2 className="masters__section-title">{t('masters.title')}</h2>
        </FadeIn>

        <div className="masters__grid">
          <FadeIn delay={80}>
            <article className="masters__card">
              <div className="masters__frame">
                <img
                  src={bimbaImg}
                  alt={t('masters.bimbaImageAlt')}
                  className="masters__image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="masters__accent" aria-hidden="true" />
              </div>
              <div className="masters__text">
                <div className="masters__header">
                  <span className="masters__style">{t('masters.bimbaStyle')}</span>
                  <h3 className="masters__name">{t('masters.bimba')}</h3>
                  <p className="masters__full-name">{t('masters.bimbaFullName')}</p>
                </div>
                <p className="masters__body">{t('masters.bimbaText')}</p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={160}>
            <article className="masters__card">
              <div className="masters__frame">
                <img
                  src={pastinhaImg}
                  alt={t('masters.pastinhaImageAlt')}
                  className="masters__image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="masters__accent" aria-hidden="true" />
              </div>
              <div className="masters__text">
                <div className="masters__header">
                  <span className="masters__style">{t('masters.pastinhaStyle')}</span>
                  <h3 className="masters__name">{t('masters.pastinha')}</h3>
                  <p className="masters__full-name">{t('masters.pastinhaFullName')}</p>
                </div>
                <p className="masters__body">{t('masters.pastinhaText')}</p>
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
