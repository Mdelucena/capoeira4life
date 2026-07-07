import { useTranslation } from 'react-i18next'
import {
  ACADEMY_MAPS_EMBED_URL,
  ACADEMY_MAPS_URL,
  ACADEMY_NAME,
} from '../../config/academy'
import {
  COQUEIRO_MAPS_URL,
  PORCHESTER_MAPS_URL,
} from '../../config/academyVenues'
import academiaInsideImg from '../../assets/image/academia_inside.jpeg'
import academiaOutsideImg from '../../assets/image/academiaoutside.jpeg'
import GoogleMapEmbed from '../GoogleMapEmbed'
import AcademyPricing from './AcademyPricing'
import FadeIn from '../FadeIn'
import './AcademySection.css'

type Highlight = {
  title: string
  text: string
}

type ScheduleRow = {
  day: string
  class: string
  time: string
  academyKey: 'moberly' | 'coqueiro' | 'porchester'
}

const OTHER_ACADEMY_KEYS = ['coqueiro', 'porchester'] as const

const OTHER_ACADEMY_MAPS: Record<(typeof OTHER_ACADEMY_KEYS)[number], string> = {
  coqueiro: COQUEIRO_MAPS_URL,
  porchester: PORCHESTER_MAPS_URL,
}

export default function AcademySection() {
  const { t } = useTranslation()

  const highlights = t('academy.highlights', { returnObjects: true }) as Highlight[]
  const schedule = t('academy.schedule.rows', { returnObjects: true }) as ScheduleRow[]

  return (
    <section id="academia" className="academy">
      <div className="container academy__inner">
        <FadeIn delay={0}>
          <div className="academy__header">
            <span className="academy__label">{t('academy.label')}</span>
            <h2 className="academy__title">{t('academy.title')}</h2>
            <p className="academy__subtitle">{t('academy.subtitle')}</p>
          </div>
        </FadeIn>

        <div className="academy__intro">
          <div className="academy__prose">
            <FadeIn delay={80}>
              <p className="academy__lead">{t('academy.lead')}</p>
            </FadeIn>
            {(t('academy.body', { returnObjects: true }) as string[]).map((paragraph, i) => (
              <FadeIn key={paragraph.slice(0, 40)} delay={140 + i * 70}>
                <p className="academy__body">{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="academy__venue" direction="right" delay={120}>
            <div className="academy__venue-card">
              <span className="academy__venue-label">{t('academy.venue.label')}</span>
              <h3 className="academy__venue-name">{ACADEMY_NAME}</h3>
              <address className="academy__venue-address">{t('academy.venue.address')}</address>
              <a
                href={ACADEMY_MAPS_URL}
                className="academy__venue-link"
                target="_blank"
                rel="noreferrer"
              >
                {t('academy.venue.openMaps')}
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="academy__gallery">
          <FadeIn className="academy__photo-card" direction="left" delay={100}>
            <div className="academy__frame">
              <img
                src={academiaOutsideImg}
                alt={t('academy.photos.outsideAlt')}
                className="academy__photo"
              />
            </div>
            <p className="academy__photo-caption">{t('academy.photos.outsideCaption')}</p>
          </FadeIn>

          <FadeIn className="academy__photo-card" direction="right" delay={180}>
            <div className="academy__frame">
              <img
                src={academiaInsideImg}
                alt={t('academy.photos.insideAlt')}
                className="academy__photo"
              />
            </div>
            <p className="academy__photo-caption">{t('academy.photos.insideCaption')}</p>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="academy__other-academies">
            <h3 className="academy__other-academies-title">{t('academy.otherVenues.title')}</h3>
            <ul className="academy__other-academies-list">
              {OTHER_ACADEMY_KEYS.map((key) => (
                <li key={key} className="academy__other-academies-item">
                  <h4>{t(`academy.otherVenues.items.${key}.name`)}</h4>
                  <p className="academy__other-academies-coach">
                    {t(`academy.otherVenues.items.${key}.coach`)}
                  </p>
                  <p className="academy__other-academies-schedule">
                    {t(`academy.otherVenues.items.${key}.schedule`)}
                  </p>
                  <address>{t(`academy.otherVenues.items.${key}.address`)}</address>
                  <a
                    href={OTHER_ACADEMY_MAPS[key]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('academy.otherVenues.openMaps')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <div className="academy__highlights">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={220 + i * 80}>
              <article className="academy__highlight">
                <h3 className="academy__highlight-title">{item.title}</h3>
                <p className="academy__highlight-text">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <AcademyPricing />

        <FadeIn delay={260}>
          <div className="academy__schedule">
            <div className="academy__schedule-header">
              <span className="academy__label">{t('academy.schedule.label')}</span>
              <h3 className="academy__schedule-title">{t('academy.schedule.title')}</h3>
              <p className="academy__schedule-note">{t('academy.schedule.note')}</p>
            </div>

            <div className="academy__schedule-table-wrap">
              <table className="academy__schedule-table">
                <thead>
                  <tr>
                    <th scope="col">{t('academy.schedule.columns.day')}</th>
                    <th scope="col">{t('academy.schedule.columns.class')}</th>
                    <th scope="col">{t('academy.schedule.columns.time')}</th>
                    <th scope="col">{t('academy.schedule.columns.academy')}</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={`${row.day}-${row.time}-${row.academyKey}`}>
                      <td data-label={t('academy.schedule.columns.day')}>{row.day}</td>
                      <td data-label={t('academy.schedule.columns.class')}>{row.class}</td>
                      <td data-label={t('academy.schedule.columns.time')}>{row.time}</td>
                      <td data-label={t('academy.schedule.columns.academy')}>
                        {t(`academy.schedule.venues.${row.academyKey}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={320}>
          <div className="academy__map">
            <div className="academy__map-header">
              <span className="academy__label">{t('academy.map.label')}</span>
              <h3 className="academy__map-title">{t('academy.map.title')}</h3>
            </div>
            <GoogleMapEmbed
              src={ACADEMY_MAPS_EMBED_URL}
              title={t('academy.map.embedTitle', { name: ACADEMY_NAME })}
              className="academy__map-embed"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
