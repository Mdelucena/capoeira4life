import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import FadeIn from '../FadeIn'
import { PARTNERS, type Partner } from '../../data/partners'
import { getWhatsAppUrl } from '../../config/contact'
import './PartnershipsSection.css'

const HOLD_MS = 3000
const SHIFT_MS = 750
const QUEUE_IN_MS = 550

function PartnerCard({
  partner,
  slotClass,
  name,
  phrase,
  visitLabel,
  onSelect,
}: {
  partner: Partner
  slotClass: string
  name: string
  phrase: string
  visitLabel: string
  onSelect?: () => void
}) {
  const isMini = slotClass.includes('slot-1') || slotClass.includes('slot-2')

  return (
    <a
      href={partner.url}
      className={`partnerships__card ${slotClass}`}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={isMini ? -1 : undefined}
      aria-hidden={isMini || undefined}
      onClick={(event) => {
        if (isMini && onSelect) {
          event.preventDefault()
          onSelect()
        }
      }}
    >
      <div className="partnerships__logo-wrap">
        <img
          src={partner.image}
          alt={partner.name}
          className="partnerships__logo"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="partnerships__name">{name}</p>
      <p className="partnerships__phrase">{phrase}</p>
      <span className="partnerships__visit">{visitLabel}</span>
    </a>
  )
}

export default function PartnershipsSection() {
  const { t } = useTranslation()
  const benefits = t('partnerships.benefits', { returnObjects: true }) as string[]
  const total = PARTNERS.length
  const [active, setActive] = useState(0)
  const [exitingId, setExitingId] = useState<string | null>(null)
  const [enteringId, setEnteringId] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [paused, setPaused] = useState(false)
  const timersRef = useRef<number[]>([])

  function clearTimers() {
    timersRef.current.forEach((id) => window.clearTimeout(id))
    timersRef.current = []
  }

  function advanceTo(nextIndex: number) {
    if (busy || nextIndex === active) return

    const leaving = PARTNERS[active]
    clearTimers()
    setBusy(true)
    setExitingId(leaving.id)
    setEnteringId(null)
    setActive(nextIndex)

    const shiftTimer = window.setTimeout(() => {
      setExitingId(null)
      setEnteringId(leaving.id)

      const queueTimer = window.setTimeout(() => {
        setEnteringId(null)
        setBusy(false)
      }, QUEUE_IN_MS)
      timersRef.current.push(queueTimer)
    }, SHIFT_MS)
    timersRef.current.push(shiftTimer)
  }

  useEffect(() => {
    if (paused || busy) return

    const holdTimer = window.setTimeout(() => {
      advanceTo((active + 1) % total)
    }, HOLD_MS)

    return () => window.clearTimeout(holdTimer)
  }, [paused, busy, active, total])

  useEffect(() => () => clearTimers(), [])

  function slotFor(partnerIndex: number, partnerId: string) {
    if (exitingId === partnerId) return 'partnerships__card--exit'
    if (enteringId === partnerId) return 'partnerships__card--slot-2 partnerships__card--enter-queue'

    const slot = (partnerIndex - active + total) % total
    return `partnerships__card--slot-${slot}`
  }

  return (
    <section id="parcerias" className="partnerships section">
      <div className="container">
        <div className="partnerships__layout">
          <FadeIn delay={0} className="partnerships__intro">
            <header className="partnerships__header">
              <span className="partnerships__label">{t('partnerships.label')}</span>
              <h2 className="partnerships__title">{t('partnerships.title')}</h2>
              <p className="partnerships__lead">{t('partnerships.lead')}</p>
            </header>
          </FadeIn>

          <FadeIn delay={100} className="partnerships__showcase">
            <div
              className="partnerships__carousel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setPaused(false)
                }
              }}
            >
              <div className="partnerships__stage" aria-live="polite">
                {PARTNERS.map((partner, partnerIndex) => (
                  <PartnerCard
                    key={partner.id}
                    partner={partner}
                    slotClass={slotFor(partnerIndex, partner.id)}
                    name={t(`partnerships.items.${partner.id}.name`)}
                    phrase={t(`partnerships.items.${partner.id}.phrase`)}
                    visitLabel={t('partnerships.visitSite')}
                    onSelect={() => advanceTo(partnerIndex)}
                  />
                ))}
              </div>

              <div className="partnerships__dots" role="tablist" aria-label={t('partnerships.title')}>
                {PARTNERS.map((partner, i) => (
                  <button
                    key={partner.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={t(`partnerships.items.${partner.id}.name`)}
                    className={`partnerships__dot ${i === active ? 'partnerships__dot--active' : ''}`}
                    onClick={() => advanceTo(i)}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={180} className="partnerships__aside">
            <ul className="partnerships__benefits">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="partnerships__cta-block">
              <p className="partnerships__cta-text">{t('partnerships.ctaText')}</p>
              <a
                href={getWhatsAppUrl(t('partnerships.whatsappMessage'))}
                className="partnerships__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('partnerships.cta')}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
