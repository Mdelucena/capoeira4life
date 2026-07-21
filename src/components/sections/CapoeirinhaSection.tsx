import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import MovesCarousel from '../MovesCarousel'
import CapoeirinhaGallery from '../CapoeirinhaGallery'
import CapoeirinhaForm from '../CapoeirinhaForm'
import YouTubeEmbed from '../YouTubeEmbed'
import capoeirinhaAvatar from '../../assets/image/capoeirinha.jpeg'
import graduacaoImg from '../../assets/image/criançacerti.jpeg'
import './CapoeirinhaSection.css'

const CAPOEIRINHA_VIDEO_ID = 'PZMuPfSBNiU'

export default function CapoeirinhaSection() {
  const { t } = useTranslation()

  const features = t('capoeirinha.about.features', { returnObjects: true }) as {
    title: string
    text: string
  }[]

  return (
    <section className="capoeirinha">
      <div className="capoeirinha__intro">
        <div className="capoeirinha__intro-grid">
          <FadeIn className="capoeirinha__intro-visual" direction="left" delay={0}>
            <div className="capoeirinha__intro-frame">
              <div className="capoeirinha__intro-blob" aria-hidden="true" />
              <img
                src={capoeirinhaAvatar}
                alt={t('capoeirinha.about.avatarAlt')}
                className="capoeirinha__intro-avatar"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>

          <FadeIn className="capoeirinha__intro-content" delay={120}>
            <span className="capoeirinha__label">{t('capoeirinha.intro.label')}</span>
            <h2 className="capoeirinha__title">{t('capoeirinha.intro.title')}</h2>
            <p className="capoeirinha__lead">{t('capoeirinha.intro.lead')}</p>
            <p className="capoeirinha__body">{t('capoeirinha.intro.body')}</p>
            <ul className="capoeirinha__highlights">
              {(t('capoeirinha.intro.highlights', { returnObjects: true }) as string[]).map(
                (item) => (
                  <li key={item} className="capoeirinha__highlight">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </FadeIn>
        </div>
      </div>

      <article className="capoeirinha__about">
        <div className="capoeirinha__about-inner">
          <FadeIn delay={0}>
            <span className="capoeirinha__label capoeirinha__label--center">
              {t('capoeirinha.about.label')}
            </span>
            <h3 className="capoeirinha__section-title">{t('capoeirinha.about.title')}</h3>
          </FadeIn>

          <div className="capoeirinha__features">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={80 + i * 80}>
                <article className="capoeirinha__feature">
                  <h4 className="capoeirinha__feature-title">{feature.title}</h4>
                  <p className="capoeirinha__feature-text">{feature.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={320}>
            <p className="capoeirinha__about-mascot">{t('capoeirinha.about.avatarText')}</p>
          </FadeIn>
        </div>
      </article>

      <article className="capoeirinha__moves">
        <div className="container capoeirinha__moves-inner">
          <FadeIn delay={0}>
            <span className="capoeirinha__label capoeirinha__label--center">
              {t('capoeirinha.moves.label')}
            </span>
            <h3 className="capoeirinha__section-title">{t('capoeirinha.moves.title')}</h3>
            <p className="capoeirinha__section-subtitle">{t('capoeirinha.moves.subtitle')}</p>
          </FadeIn>
          <FadeIn delay={120}>
            <MovesCarousel />
          </FadeIn>
        </div>
      </article>

      <article className="capoeirinha__gallery">
        <div className="container capoeirinha__gallery-inner">
          <FadeIn delay={0}>
            <span className="capoeirinha__label capoeirinha__label--center">
              {t('capoeirinha.gallery.label')}
            </span>
            <h3 className="capoeirinha__section-title">{t('capoeirinha.gallery.title')}</h3>
            <p className="capoeirinha__section-subtitle">{t('capoeirinha.gallery.subtitle')}</p>
          </FadeIn>
          <FadeIn delay={120}>
            <CapoeirinhaGallery />
          </FadeIn>
        </div>
      </article>

      <article className="capoeirinha__video">
        <div className="container capoeirinha__video-inner">
          <FadeIn delay={0}>
            <span className="capoeirinha__label capoeirinha__label--center">
              {t('capoeirinha.video.label')}
            </span>
            <h3 className="capoeirinha__section-title">{t('capoeirinha.video.title')}</h3>
            <p className="capoeirinha__video-subtitle">{t('capoeirinha.video.subtitle')}</p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="capoeirinha__video-card">
              <div className="capoeirinha__video-media">
                <YouTubeEmbed
                  videoId={CAPOEIRINHA_VIDEO_ID}
                  title={t('capoeirinha.video.title')}
                  format="video"
                  className="capoeirinha__video-player"
                />
              </div>

              <div className="capoeirinha__video-content">
                <p className="capoeirinha__video-lead">{t('capoeirinha.video.lead')}</p>
                <ul className="capoeirinha__video-points">
                  {(
                    t('capoeirinha.video.points', { returnObjects: true }) as {
                      title: string
                      text: string
                    }[]
                  ).map((point, i) => (
                    <li key={point.title} className="capoeirinha__video-point">
                      <span className="capoeirinha__video-point-num">{i + 1}</span>
                      <div>
                        <strong className="capoeirinha__video-point-title">{point.title}</strong>
                        <p className="capoeirinha__video-point-text">{point.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>

      <article className="capoeirinha__graduation">
        <div className="capoeirinha__graduation-split">
          <div className="capoeirinha__graduation-text">
            <FadeIn delay={0}>
              <span className="capoeirinha__label">{t('capoeirinha.graduation.label')}</span>
              <h3 className="capoeirinha__subtitle">{t('capoeirinha.graduation.title')}</h3>
              <p className="capoeirinha__lead">{t('capoeirinha.graduation.lead')}</p>
            </FadeIn>
            <FadeIn delay={120}>
              {(t('capoeirinha.graduation.body', { returnObjects: true }) as string[]).map(
                (paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="capoeirinha__body">
                    {paragraph}
                  </p>
                ),
              )}
            </FadeIn>
            <FadeIn delay={200}>
              <ul className="capoeirinha__graduation-steps">
                {(
                  t('capoeirinha.graduation.steps', { returnObjects: true }) as {
                    title: string
                    text: string
                  }[]
                ).map((step) => (
                  <li key={step.title} className="capoeirinha__graduation-step">
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn className="capoeirinha__graduation-media" direction="right" delay={80}>
            <div className="capoeirinha__graduation-frame">
              <img
                src={graduacaoImg}
                alt={t('capoeirinha.graduation.imageAlt')}
                className="capoeirinha__graduation-photo"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>
        </div>
      </article>

      <article className="capoeirinha__schedule">
        <div className="container capoeirinha__schedule-inner">
          <FadeIn delay={0}>
            <span className="capoeirinha__label capoeirinha__label--center">
              {t('capoeirinha.schedule.label')}
            </span>
            <h3 className="capoeirinha__section-title">{t('capoeirinha.schedule.title')}</h3>
            <p className="capoeirinha__section-subtitle">{t('capoeirinha.schedule.subtitle')}</p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="capoeirinha__schedule-table-wrap">
              <table className="capoeirinha__schedule-table">
                <thead>
                  <tr>
                    <th scope="col">{t('capoeirinha.schedule.columns.day')}</th>
                    <th scope="col">{t('capoeirinha.schedule.columns.class')}</th>
                    <th scope="col">{t('capoeirinha.schedule.columns.time')}</th>
                    <th scope="col">{t('capoeirinha.schedule.columns.academy')}</th>
                  </tr>
                </thead>
                <tbody>
                  {(
                    t('capoeirinha.schedule.rows', { returnObjects: true }) as {
                      day: string
                      class: string
                      time: string
                      venue: string
                    }[]
                  ).map((row) => (
                    <tr key={`${row.day}-${row.time}-${row.venue}`}>
                      <td data-label={t('capoeirinha.schedule.columns.day')}>{row.day}</td>
                      <td data-label={t('capoeirinha.schedule.columns.class')}>{row.class}</td>
                      <td data-label={t('capoeirinha.schedule.columns.time')}>{row.time}</td>
                      <td data-label={t('capoeirinha.schedule.columns.academy')}>{row.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="capoeirinha__schedule-note">{t('capoeirinha.schedule.note')}</p>
          </FadeIn>
        </div>
      </article>

      <article className="capoeirinha__signup">
        <div className="container">
          <FadeIn delay={0}>
            <span className="capoeirinha__label capoeirinha__label--center">
              {t('capoeirinha.form.label')}
            </span>
            <h3 className="capoeirinha__section-title">{t('capoeirinha.form.title')}</h3>
            <p className="capoeirinha__section-subtitle">{t('capoeirinha.form.subtitle')}</p>
          </FadeIn>
          <FadeIn delay={120}>
            <CapoeirinhaForm />
          </FadeIn>
        </div>
      </article>
    </section>
  )
}
