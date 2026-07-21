import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import './CapoeirinhaGallery.css'

const imageModules = import.meta.glob(
  '../assets/image/aulascapoeirinha/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
) as Record<string, string>

const photos = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

export default function CapoeirinhaGallery() {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const hasMultiplePhotos = photos.length > 1
  const activePhoto = activeIndex !== null ? photos[activeIndex] : null

  useEffect(() => {
    if (activeIndex === null) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveIndex(null)
        return
      }

      if (!hasMultiplePhotos) return

      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => {
          if (prev === null) return prev
          return prev === 0 ? photos.length - 1 : prev - 1
        })
      }

      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => {
          if (prev === null) return prev
          return prev === photos.length - 1 ? 0 : prev + 1
        })
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, hasMultiplePhotos])

  function scrollByAmount(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  function openPhoto(index: number) {
    setActiveIndex(index)
  }

  function closePhoto() {
    setActiveIndex(null)
  }

  function goPrev() {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return prev === 0 ? photos.length - 1 : prev - 1
    })
  }

  function goNext() {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      return prev === photos.length - 1 ? 0 : prev + 1
    })
  }

  if (photos.length === 0) {
    return (
      <div className="capoeirinha-gallery__empty">
        <p>{t('capoeirinha.gallery.empty')}</p>
      </div>
    )
  }

  return (
    <>
      <div className="capoeirinha-gallery">
        {hasMultiplePhotos && (
          <button
            type="button"
            className="capoeirinha-gallery__arrow capoeirinha-gallery__arrow--prev"
            onClick={() => scrollByAmount(-1)}
            aria-label={t('capoeirinha.gallery.prev')}
          >
            ←
          </button>
        )}

        <div className="capoeirinha-gallery__track" ref={trackRef}>
          {photos.map((src, index) => (
            <figure key={src} className="capoeirinha-gallery__item">
              <button
                type="button"
                className="capoeirinha-gallery__open"
                onClick={() => openPhoto(index)}
                aria-label={t('capoeirinha.gallery.open', { index: index + 1 })}
              >
                <img
                  src={src}
                  alt={t('capoeirinha.gallery.photoAlt', { index: index + 1 })}
                  className="capoeirinha-gallery__photo"
                  loading="lazy"
                />
              </button>
            </figure>
          ))}
        </div>

        {hasMultiplePhotos && (
          <button
            type="button"
            className="capoeirinha-gallery__arrow capoeirinha-gallery__arrow--next"
            onClick={() => scrollByAmount(1)}
            aria-label={t('capoeirinha.gallery.next')}
          >
            →
          </button>
        )}
      </div>

      {activePhoto && activeIndex !== null && createPortal(
        <div
          className="capoeirinha-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t('capoeirinha.gallery.lightboxLabel')}
          onClick={closePhoto}
        >
          <button
            type="button"
            className="capoeirinha-gallery__lightbox-close"
            onClick={closePhoto}
            aria-label={t('capoeirinha.gallery.close')}
          >
            ×
          </button>

          <div
            className="capoeirinha-gallery__lightbox-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {hasMultiplePhotos && (
              <button
                type="button"
                className="capoeirinha-gallery__lightbox-arrow capoeirinha-gallery__lightbox-arrow--prev"
                onClick={goPrev}
                aria-label={t('capoeirinha.gallery.prev')}
              >
                ←
              </button>
            )}

            <img
              src={activePhoto}
              alt={t('capoeirinha.gallery.photoAlt', { index: activeIndex + 1 })}
              className="capoeirinha-gallery__lightbox-photo"
            />

            {hasMultiplePhotos && (
              <>
                <button
                  type="button"
                  className="capoeirinha-gallery__lightbox-arrow capoeirinha-gallery__lightbox-arrow--next"
                  onClick={goNext}
                  aria-label={t('capoeirinha.gallery.next')}
                >
                  →
                </button>
                <span className="capoeirinha-gallery__lightbox-counter">
                  {activeIndex + 1} / {photos.length}
                </span>
              </>
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
