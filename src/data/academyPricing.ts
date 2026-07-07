export type PricingPlanId = 'monthly' | 'quarterly' | 'semiannual' | 'annual'

export type PricingPlan = {
  id: PricingPlanId
  price: number
}

export const ACADEMY_REGISTRATION_FEE = 15

export const KIDS_PRICING: PricingPlan[] = [
  { id: 'monthly', price: 50 },
  { id: 'quarterly', price: 47 },
  { id: 'semiannual', price: 45 },
  { id: 'annual', price: 42 },
]

export const ADULTS_PRICING: PricingPlan[] = [
  { id: 'monthly', price: 60 },
  { id: 'quarterly', price: 57 },
  { id: 'semiannual', price: 55 },
]
