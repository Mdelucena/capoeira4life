import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import './ReviewsSection.css'

type Review = {
  name: string
  location: string
  text: string
}

export default function ReviewsSection() {
  const { t } = useTranslation()
  const items = t('reviews.items', { returnObjects: true }) as Review[]

  return (
    <section id="avaliacoes" className="reviews section">
      <div className="container">
        <FadeIn delay={0}>
          <h2 className="section-title">{t('reviews.title')}</h2>
        </FadeIn>
        <div className="reviews__grid">
          {items.map((review, index) => (
            <FadeIn key={review.name} className="reviews__card" delay={100 + index * 100}>
              <blockquote className="reviews__quote">
                <p>{review.text}</p>
              </blockquote>
              <footer className="reviews__author">
                <span className="reviews__avatar" aria-hidden="true">
                  {review.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <div>
                  <cite className="reviews__name">{review.name}</cite>
                  <span className="reviews__location">{review.location}</span>
                </div>
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
