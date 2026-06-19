import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import bimbaImg from '../../assets/image/mestrebimba.jpg'
import pastinhaImg from '../../assets/image/mestrepastinha.jpg'
import './MastersSection.css'

export default function MastersSection() {
  const { t } = useTranslation()

  return (
    <section id="mestres" className="masters">
      <FadeIn className="masters__intro" delay={0}>
        <span className="masters__section-label">{t('masters.label')}</span>
        <h2 className="masters__section-title">{t('masters.title')}</h2>
      </FadeIn>

      <article className="masters__block">
        <div className="masters__split">
          <div className="masters__text">
            <FadeIn delay={0}>
              <div className="masters__header">
                <span className="masters__style">{t('masters.bimbaStyle')}</span>
                <h3 className="masters__name">{t('masters.bimba')}</h3>
                <p className="masters__full-name">{t('masters.bimbaFullName')}</p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="masters__body">{t('masters.bimbaText')}</p>
            </FadeIn>
          </div>
          <FadeIn className="masters__media" direction="right" delay={100}>
            <div className="masters__frame">
              <img
                src={pastinhaImg}
                alt={t('masters.bimbaImageAlt')}
                className="masters__image"
              />
              <div className="masters__accent" aria-hidden="true" />
            </div>
          </FadeIn>
        </div>
      </article>

      <article className="masters__block masters__block--reverse">
        <div className="masters__split">
          <FadeIn className="masters__media" direction="left" delay={100}>
            <div className="masters__frame">
              <img
                src={bimbaImg}
                alt={t('masters.pastinhaImageAlt')}
                className="masters__image"
              />
              <div className="masters__accent" aria-hidden="true" />
            </div>
          </FadeIn>
          <div className="masters__text">
            <FadeIn delay={0}>
              <div className="masters__header">
                <span className="masters__style">{t('masters.pastinhaStyle')}</span>
                <h3 className="masters__name">{t('masters.pastinha')}</h3>
                <p className="masters__full-name">{t('masters.pastinhaFullName')}</p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="masters__body">{t('masters.pastinhaText')}</p>
            </FadeIn>
          </div>
        </div>
      </article>
    </section>
  )
}
