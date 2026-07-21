import { useTranslation } from 'react-i18next'
import {
  ACADEMY_REGISTRATION_FEE,
  ADULTS_PRICING,
  KIDS_PRICING,
  type PricingPlan,
} from '../../data/academyPricing'
import FadeIn from '../FadeIn'
import './AcademyPricing.css'

type PricingGroupProps = {
  groupKey: 'kids' | 'adults'
  plans: PricingPlan[]
  delay: number
}

function PricingGroup({ groupKey, plans, delay }: PricingGroupProps) {
  const { t } = useTranslation()
  const baseKey = `academy.pricing.${groupKey}`

  return (
    <FadeIn delay={delay}>
      <div className="academy-pricing__group">
        <h4 className="academy-pricing__group-title">{t(`${baseKey}.title`)}</h4>

        <div className="academy-pricing__cards">
          {plans.map((plan) => {
            const planKey = `${baseKey}.plans.${plan.id}`
            const perks = t(`${planKey}.perks`, { returnObjects: true }) as string[]

            return (
              <article key={plan.id} className="academy-pricing__card">
                <div className="academy-pricing__card-top">
                  <span className="academy-pricing__badge">{t(`${planKey}.name`)}</span>
                </div>

                <div className="academy-pricing__card-body">
                  <div className="academy-pricing__price">
                    <span className="academy-pricing__currency">{t('academy.pricing.currency')}</span>
                    <span className="academy-pricing__amount">{plan.price}</span>
                  </div>
                  <p className="academy-pricing__period">{t('academy.pricing.perMonth')}</p>

                  <ul className="academy-pricing__perks">
                    {perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </FadeIn>
  )
}

export default function AcademyPricing() {
  const { t } = useTranslation()

  return (
    <div className="academy-pricing">
      <FadeIn delay={200}>
        <div className="academy-pricing__header">
          <span className="academy-pricing__label">{t('academy.pricing.label')}</span>
          <h3 className="academy-pricing__title">{t('academy.pricing.title')}</h3>
          <p className="academy-pricing__subtitle">{t('academy.pricing.subtitle')}</p>
        </div>
      </FadeIn>

      <FadeIn delay={240}>
        <div className="academy-pricing__registration">
          <span className="academy-pricing__registration-label">
            {t('academy.pricing.registration.label')}
          </span>
          <span className="academy-pricing__registration-amount">
            {t('academy.pricing.currency')}
            {ACADEMY_REGISTRATION_FEE}
          </span>
          <p className="academy-pricing__registration-note">
            {t('academy.pricing.registration.note')}
          </p>
        </div>
      </FadeIn>

      <PricingGroup groupKey="kids" plans={KIDS_PRICING} delay={280} />
      <PricingGroup groupKey="adults" plans={ADULTS_PRICING} delay={340} />

      <FadeIn delay={380}>
        <p className="academy-pricing__private-note">{t('academy.pricing.privateLessons')}</p>
      </FadeIn>

      <FadeIn delay={400}>
        <p className="academy-pricing__footnote">{t('academy.pricing.footnote')}</p>
      </FadeIn>
    </div>
  )
}
