const coqueiroQuery = encodeURIComponent(
  'The Gym Group London West Hampstead, Unit D2, 41 Fortune Green Road, London NW6 1DR',
)

export const COQUEIRO_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${coqueiroQuery}`

const porchesterQuery = encodeURIComponent(
  'Porchester Centre EveryOne Active, Queensway, Porchester Rd, London W2 5HS',
)

export const PORCHESTER_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${porchesterQuery}`

export const PORCHESTER_EMBED_URL = `https://maps.google.com/maps?q=${porchesterQuery}&output=embed`

const ewellQuery = encodeURIComponent('Ewell Hall, 7 London Rd, Ewell, Epsom KT17 2AY, United Kingdom')

export const EWELL_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ewellQuery}`

export const EWELL_WEBSITE_URL = 'https://ewellhall.uk/'
