import { getWhatsAppUrl } from '../config/contact'

export function formatWhatsAppField(label: string, value: string) {
  return `*${label}:* ${value}`
}

export function openWhatsAppMessage(message: string) {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
