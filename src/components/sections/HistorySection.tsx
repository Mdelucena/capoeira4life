import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import capoeiraImg from '../../assets/image/capoeira.jpeg'
import capoeira2Img from '../../assets/image/capoeira2.jpeg'
import './HistorySection.css'

const HISTORY_IMAGES = [
  { src: capoeiraImg, altKey: 'history.imageAlt' },
  { src: capoeira2Img, altKey: 'history.imageAlt2' },
] as const

export default function HistorySection() {
  const { t } = useTranslation()
  const [imageIndex, setImageIndex] = useState(0)

  const totalImages = HISTORY_IMAGES.length
  const currentImage = HISTORY_IMAGES[imageIndex]

  function goPrev() {
    setImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  function goNext() {
    setImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

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
            <div className="history__body-group">
              {(t('history.paragraphs', { returnObjects: true }) as string[]).map((paragraph, index) => (
                <p key={index} className="history__body">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={360}>
            <a href="#mestres" className="history__cta">
              {t('history.cta')}
              <span className="history__cta-arrow" aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>

        <FadeIn className="history__media" direction="right" delay={160}>
          <div className="history__gallery">
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={t(currentImage.altKey)}
              className="history__image"
              loading="lazy"
              decoding="async"
            />

            <button
              type="button"
              className="history__arrow history__arrow--prev"
              onClick={goPrev}
              aria-label={t('history.prevPhoto')}
            >
              ←
            </button>
            <button
              type="button"
              className="history__arrow history__arrow--next"
              onClick={goNext}
              aria-label={t('history.nextPhoto')}
            >
              →
            </button>

            <span className="history__counter">
              {imageIndex + 1} / {totalImages}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
