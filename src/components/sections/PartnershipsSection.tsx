import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import { PARTNERS } from '../../data/partners'
import './PartnershipsSection.css'

const HOLD_MS = 5000
const EXIT_MS = 550

export default function PartnershipsSection() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out'>('in')
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0)
  const indexRef = useRef(0)

  indexRef.current = index
  const partner = PARTNERS[index]

  useEffect(() => {
    if (paused || PARTNERS.length < 2) return

    let cancelled = false
    let timerId = 0

    const clear = () => {
      if (timerId) window.clearTimeout(timerId)
    }

    const runCycle = () => {
      clear()
      timerId = window.setTimeout(() => {
        if (cancelled) return
        setPhase('out')

        timerId = window.setTimeout(() => {
          if (cancelled) return
          const next = (indexRef.current + 1) % PARTNERS.length
          indexRef.current = next
          setIndex(next)
          setPhase('in')
          runCycle()
        }, EXIT_MS)
      }, HOLD_MS)
    }

    setPhase('in')
    runCycle()

    return () => {
      cancelled = true
      clear()
    }
  }, [paused, cycle])

  function goTo(i: number) {
    indexRef.current = i
    setIndex(i)
    setPhase('in')
    setCycle((value) => value + 1)
  }

  return (
    <section id="parcerias" className="partnerships section">
      <div className="container">
        <FadeIn delay={0}>
          <h2 className="section-title">{t('partnerships.title')}</h2>
        </FadeIn>

        <FadeIn delay={120}>
          <div
            className="partnerships__carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label={t('partnerships.title')}
          >
            <div className="partnerships__stage">
              <div
                key={`${partner.id}-${index}-${cycle}`}
                className={`partnerships__slide partnerships__slide--${phase}`}
              >
                <a
                  href={partner.url}
                  className="partnerships__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={partner.name}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="partnerships__logo"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="partnerships__caption">
                    <p className="partnerships__name">{t(`partnerships.items.${partner.id}.name`)}</p>
                    <p className="partnerships__phrase">{t(`partnerships.items.${partner.id}.phrase`)}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="partnerships__dots" role="tablist" aria-label={t('partnerships.title')}>
              {PARTNERS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={item.name}
                  className={`partnerships__dot${i === index ? ' partnerships__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
