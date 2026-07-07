import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EVENTS, type EventId } from '../../data/events'
import EventCard from '../EventCard'
import EventModal from '../EventModal'
import FadeIn from '../FadeIn'
import './EventsSection.css'

export default function EventsSection() {
  const { t } = useTranslation()
  const [openEventId, setOpenEventId] = useState<EventId | null>(null)

  return (
    <section id="eventos" className="events section">
      <div className="container">
        <FadeIn delay={0}>
          <div className="events__header">
            <span className="events__label">{t('events.label')}</span>
            <h2 className="events__title">{t('events.title')}</h2>
            <p className="events__subtitle">{t('events.subtitle')}</p>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="events__lead">{t('events.lead')}</p>
        </FadeIn>

        <div className="events__grid">
          {EVENTS.map((event, i) => (
            <FadeIn key={event.id} delay={180 + i * 80}>
              <EventCard
                event={event}
                onOpen={event.hasDetail ? () => setOpenEventId(event.id) : undefined}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {openEventId && (
        <EventModal eventId={openEventId} onClose={() => setOpenEventId(null)} />
      )}
    </section>
  )
}
