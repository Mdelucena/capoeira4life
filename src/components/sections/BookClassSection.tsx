import { useTranslation } from 'react-i18next'
import BookClassForm from '../BookClassForm'
import FadeIn from '../FadeIn'
import './BookClassSection.css'

export default function BookClassSection() {
  const { t } = useTranslation()

  return (
    <section id="aulas" className="book-class section">
      <div className="container">
        <FadeIn delay={0}>
          <h2 className="section-title">{t('bookClass.title')}</h2>
          <p className="book-class__subtitle">{t('bookClass.subtitle')}</p>
        </FadeIn>
        <FadeIn delay={150}>
          <BookClassForm />
        </FadeIn>
      </div>
    </section>
  )
}
