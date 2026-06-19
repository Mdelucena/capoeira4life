import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import './PartnershipsSection.css'

export default function PartnershipsSection() {
  const { t } = useTranslation()

  return (
    <section id="servicos" className="partnerships section">
      <div className="container">
        <FadeIn delay={0}>
          <h2 className="section-title">{t('partnerships.title')}</h2>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="partnerships__empty">
            <p>{t('partnerships.empty')}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
