// DDI + DDD + número, só dígitos. Ex: 5562999999999
export const WHATSAPP_NUMBER = '447496831095'

export const WHATSAPP_DISPLAY = '+44 7496 831095'

export const CONTACT_EMAIL = 'capoeiralifelondon@gmail.com'

export const INSTAGRAM_HANDLE = 'capoeira4lifelondon'
export const YOUTUBE_HANDLE = 'capoeira4lifelondon'

export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
export const YOUTUBE_URL = `https://www.youtube.com/@${YOUTUBE_HANDLE}`

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Gostaria de saber mais sobre a Capoeira4Life.'

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  if (!WHATSAPP_NUMBER) return 'https://wa.me/'
  const params = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${WHATSAPP_NUMBER}${params}`
}
