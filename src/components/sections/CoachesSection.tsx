import { useTranslation } from 'react-i18next'
import CoachProfile from '../CoachProfile'
import './CoachesSection.css'

export default function CoachesSection() {
  const { t } = useTranslation()

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
    </section>
  )
}
