const coqueiroQuery = encodeURIComponent(
  'The Gym Group London West Hampstead, Unit D2, 41 Fortune Green Road, London NW6 1DR',
)

export const COQUEIRO_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${coqueiroQuery}`

const porchesterQuery = encodeURIComponent(
  'Porchester Centre EveryOne Active, Queensway, Porchester Rd, London W2 5HS',
)

export const PORCHESTER_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${porchesterQuery}`

export const PORCHESTER_EMBED_URL = `https://maps.google.com/maps?q=${porchesterQuery}&output=embed`
