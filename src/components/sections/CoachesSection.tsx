import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CoachProfile from '../CoachProfile'
import FadeIn from '../FadeIn'
import professoresJuntosImg from '../../assets/image/professores/professoresjuntos.jpg'
import './CoachesSection.css'

export default function CoachesSection() {
  const { t } = useTranslation()
  const classParagraphs = t('coaches.classes.paragraphs', { returnObjects: true }) as string[]

  return (
    <section id="professores" className="coaches">
      <div className="coaches__intro">
        <span className="coaches__section-label">{t('coaches.label')}</span>
        <h2 className="coaches__section-title">{t('coaches.title')}</h2>
        <p className="coaches__section-subtitle">{t('coaches.subtitle')}</p>
      </div>

      <div className="coaches__block">
        <CoachProfile id="fabricio" />
      </div>
      <div className="coaches__block coaches__block--reverse">
        <CoachProfile id="samurai" reverse />
      </div>
      <div className="coaches__block">
        <CoachProfile id="esquilo" />
      </div>
      <div className="coaches__block coaches__block--reverse">
        <CoachProfile id="coqueiro" reverse />
      </div>

      <div className="coaches__classes">
        <FadeIn className="coaches__classes-media" direction="left" delay={80}>
          <div className="coaches__classes-frame">
            <img
              src={professoresJuntosImg}
              alt={t('coaches.classes.imageAlt')}
              className="coaches__classes-image"
              loading="lazy"
              decoding="async"
            />
            <span className="coaches__classes-accent" aria-hidden="true" />
          </div>
        </FadeIn>

        <div className="coaches__classes-text">
          <FadeIn delay={0}>
            <div className="coaches__classes-header">
              <span className="coaches__classes-label">{t('coaches.classes.label')}</span>
              <h3 className="coaches__classes-title">{t('coaches.classes.title')}</h3>
              <p className="coaches__classes-lead">{t('coaches.classes.lead')}</p>
            </div>
          </FadeIn>

          {classParagraphs.map((paragraph, index) => (
            <FadeIn key={index} delay={120 + index * 80}>
              <p className="coaches__classes-body">{paragraph}</p>
            </FadeIn>
          ))}

          <FadeIn delay={360}>
            <Link to="/academia" className="coaches__classes-cta">
              {t('coaches.classes.cta')}
              <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
