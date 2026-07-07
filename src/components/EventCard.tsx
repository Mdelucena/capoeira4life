import { useTranslation } from 'react-i18next'
import type { EventItem } from '../data/events'
import './EventCard.css'

type EventCardProps = {
  event: EventItem
  onOpen?: () => void
}

export default function EventCard({ event, onOpen }: EventCardProps) {
  const { t } = useTranslation()

  const title = t(`events.items.${event.id}.title`)
  const description = t(`events.items.${event.id}.description`)
  const isInteractive = Boolean(event.hasDetail && onOpen)

  return (
    <article className={`event-card${isInteractive ? ' event-card--interactive' : ''}`}>
      <div className="event-card__media">
        {event.image ? (
          <img src={event.image} alt={title} className="event-card__image" />
        ) : (
          <div className="event-card__placeholder">
            <span>{t('events.photoPlaceholder')}</span>
          </div>
        )}
      </div>

      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__description">{description}</p>

        {isInteractive && (
          <button type="button" className="event-card__button" onClick={onOpen}>
            {t('events.modal.openEvent')}
          </button>
        )}
      </div>
    </article>
  )
}
