import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { capoeirinhaMoveImages } from '../data/capoeirinhaMoves'
import './MovesCarousel.css'

type Move = {
  id: string
  name: string
  description: string
}

type Direction = 'next' | 'prev'

export default function MovesCarousel() {
  const { t } = useTranslation()
  const moves = t('capoeirinha.moves.items', { returnObjects: true }) as Move[]
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<Direction>('next')

  const total = moves.length
  const current = moves[index]

  function goPrev() {
    setDirection('prev')
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  function goNext() {
    setDirection('next')
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  function goTo(nextIndex: number) {
    if (nextIndex === index) return
    setDirection(nextIndex > index ? 'next' : 'prev')
    setIndex(nextIndex)
  }

  if (!current) return null

  const image = capoeirinhaMoveImages[current.id]
  const slideClass = `moves-carousel__slide moves-carousel__slide--${direction}`

  return (
    <div className="moves-carousel">
      <button
        type="button"
        className="moves-carousel__arrow moves-carousel__arrow--prev"
        onClick={goPrev}
        aria-label={t('capoeirinha.moves.prev')}
      >
        ←
      </button>

      <div className={slideClass} key={current.id}>
        <div className="moves-carousel__photo">
          {image ? (
            <img src={image} alt={current.name} className="moves-carousel__photo-img" loading="lazy" decoding="async" />
          ) : (
            <span>{t('capoeirinha.moves.photoPlaceholder', { move: current.name })}</span>
          )}
        </div>
        <div className="moves-carousel__info">
          <span className="moves-carousel__counter">
            {index + 1} / {total}
          </span>
          <h4 className="moves-carousel__name">{current.name}</h4>
          <p className="moves-carousel__desc">{current.description}</p>
        </div>
      </div>

      <button
        type="button"
        className="moves-carousel__arrow moves-carousel__arrow--next"
        onClick={goNext}
        aria-label={t('capoeirinha.moves.next')}
      >
        →
      </button>

      <div className="moves-carousel__dots">
        {moves.map((move, i) => (
          <button
            key={move.id}
            type="button"
            className={`moves-carousel__dot ${i === index ? 'moves-carousel__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={move.name}
          />
        ))}
      </div>
    </div>
  )
}
