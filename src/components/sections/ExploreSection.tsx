import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import FadeIn from '../FadeIn'
import './ExploreSection.css'

type ExploreItem = {
  key: string
  to: string
}

const items: ExploreItem[] = [
  { key: 'capoeirinha', to: '/capoeirinha' },
  { key: 'nago', to: '/capoeira-nago' },
  { key: 'coaches', to: '/professores' },
  { key: 'academy', to: '/academia' },
  { key: 'events', to: '/eventos' },
  { key: 'products', to: '/produtos' },
]

export default function ExploreSection() {
  const { t } = useTranslation()

  return (
    <section id="explorar" className="explore section">
      <div className="container">
        <FadeIn delay={0}>
          <div className="explore__header">
            <span className="explore__label">{t('explore.label')}</span>
            <h2 className="explore__title">{t('explore.title')}</h2>
            <p className="explore__subtitle">{t('explore.subtitle')}</p>
          </div>
        </FadeIn>

        <div className="explore__grid">
          {items.map((item, index) => (
            <FadeIn key={item.key} delay={100 + index * 80}>
              <Link to={item.to} className="explore__card">
                <h3 className="explore__card-title">
                  {t(`explore.items.${item.key}.title`)}
                </h3>
                <p className="explore__card-text">
                  {t(`explore.items.${item.key}.text`)}
                </p>
                <span className="explore__card-cta" aria-hidden="true">
                  {t('explore.cta')}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
