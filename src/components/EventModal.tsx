import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getEventById, type EventId } from '../data/events'
import './EventModal.css'

type EventModalProps = {
  eventId: EventId
  onClose: () => void
}

export default function EventModal({ eventId, onClose }: EventModalProps) {
  const { t } = useTranslation()
  const event = getEventById(eventId)
  const [photoIndex, setPhotoIndex] = useState(0)

  const baseKey = `events.details.${eventId}`
  const title = t(`events.items.${eventId}.title`)
  const body = t(`${baseKey}.body`, { returnObjects: true }) as string[]
  const gallery = event?.gallery ?? []
  const currentPhoto = gallery[photoIndex]
  const hasMultiplePhotos = gallery.length > 1

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!event?.hasDetail) return null

  function goPrev() {
    setPhotoIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
  }

  function goNext() {
    setPhotoIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-modal-title">
      <button
        type="button"
        className="event-modal__backdrop"
        onClick={onClose}
        aria-label={t('events.modal.close')}
      />

      <div className="event-modal__panel">
        <button
          type="button"
          className="event-modal__close"
          onClick={onClose}
          aria-label={t('events.modal.close')}
        >
          ×
        </button>

        <div className="event-modal__layout">
          <div className="event-modal__content">
            <span className="event-modal__eyebrow">{t(`${baseKey}.eyebrow`)}</span>
            <h2 id="event-modal-title" className="event-modal__title">{title}</h2>
            <p className="event-modal__date">
              <span>{t('events.modal.dateLabel')}</span>
              {t(`${baseKey}.date`)}
            </p>

            <div className="event-modal__prose">
              <p className="event-modal__headline">{t(`${baseKey}.headline`)}</p>
              <p className="event-modal__lead">{t(`${baseKey}.lead`)}</p>

              {body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="event-modal__body">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="event-modal__media">
            {currentPhoto && (
              <div className="event-modal__gallery">
                <img
                  src={currentPhoto}
                  alt={t('events.modal.photoAlt', { title, index: photoIndex + 1 })}
                  className="event-modal__photo"
                />
                {hasMultiplePhotos && (
                  <>
                    <button
                      type="button"
                      className="event-modal__arrow event-modal__arrow--prev"
                      onClick={goPrev}
                      aria-label={t('events.modal.prevPhoto')}
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="event-modal__arrow event-modal__arrow--next"
                      onClick={goNext}
                      aria-label={t('events.modal.nextPhoto')}
                    >
                      →
                    </button>
                    <span className="event-modal__counter">
                      {photoIndex + 1} / {gallery.length}
                    </span>
                  </>
                )}
              </div>
            )}

            {event.video && (
              <div className="event-modal__video-wrap">
                <h3 className="event-modal__video-title">{t('events.modal.videoTitle')}</h3>
                <video
                  className="event-modal__video"
                  controls
                  playsInline
                  preload="auto"
                >
                  <source src={event.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
