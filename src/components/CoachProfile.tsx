import { useTranslation } from 'react-i18next'
import { COACHES, type CoachId } from '../data/coaches'
import FadeIn from './FadeIn'
import './CoachProfile.css'

type CoachProfileProps = {
  id: CoachId
  reverse?: boolean
  className?: string
}

export default function CoachProfile({ id, reverse = false, className = '' }: CoachProfileProps) {
  const { t } = useTranslation()
  const coach = COACHES.find((item) => item.id === id)
  if (!coach) return null

  const baseKey = `coaches.items.${id}`
  const paragraphs = t(`${baseKey}.paragraphs`, { returnObjects: true }) as string[]
  const achievements = t(`${baseKey}.achievements`, { returnObjects: true }) as string[]

  const textContent = (
    <div className="coach-profile__text">
      <FadeIn delay={0}>
        <div className="coach-profile__header">
          <span className="coach-profile__role">{t(`${baseKey}.role`)}</span>
          <h3 className="coach-profile__name">{t(`${baseKey}.name`)}</h3>
          <p className="coach-profile__full-name">{t(`${baseKey}.fullName`)}</p>
          <p className="coach-profile__experience">{t(`${baseKey}.experience`)}</p>
        </div>
      </FadeIn>

      {paragraphs.map((paragraph, i) => (
        <FadeIn key={paragraph.slice(0, 40)} delay={120 + i * 80}>
          <p className="coach-profile__body">{paragraph}</p>
        </FadeIn>
      ))}

      {achievements.length > 0 && (
        <FadeIn delay={280}>
          <div className="coach-profile__highlights">
            <h4 className="coach-profile__highlights-title">{t('coaches.achievementsTitle')}</h4>
            <ul className="coach-profile__highlights-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      )}

      {coach.instagram && (
        <FadeIn delay={360}>
          <a
            href={`https://www.instagram.com/${coach.instagram}/`}
            className="coach-profile__instagram"
            target="_blank"
            rel="noreferrer"
          >
            {t('coaches.followInstagram')} @{coach.instagram}
          </a>
        </FadeIn>
      )}
    </div>
  )

  const mediaContent = (
    <FadeIn className="coach-profile__media" direction={reverse ? 'left' : 'right'} delay={100}>
      <div className="coach-profile__frame">
        <img
          src={coach.image}
          alt={t(`${baseKey}.imageAlt`)}
          className="coach-profile__image"
          loading="lazy"
          decoding="async"
        />
        <div className="coach-profile__accent" aria-hidden="true" />
      </div>
    </FadeIn>
  )

  return (
    <article className={`coach-profile${reverse ? ' coach-profile--reverse' : ''} ${className}`.trim()}>
      <div className="coach-profile__split">
        {reverse ? (
          <>
            {mediaContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {mediaContent}
          </>
        )}
      </div>
    </article>
  )
}
