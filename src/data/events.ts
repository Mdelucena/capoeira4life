import camisaDna2025Img from '../assets/image/eventos/camisadna2025.jpeg'
import flyDna2025Img from '../assets/image/eventos/flyprinicpaldna2025.jpeg'
import fotoDna2025Img from '../assets/image/eventos/fotodna2025pessoal.jpeg'
import workshopFumacaImg from '../assets/image/eventos/wordshopfumaca.jpeg'
import videoDna2025 from '../assets/image/eventos/videodna2025.mp4'
import flyDna2026Img from '../assets/image/eventos/DNA2026.png'
import flyCapoeirinhaImg from '../assets/image/eventos/capoeirinha.png'

export type EventId = 'dnv-cultural-2025' | 'capoeirinha' | 'dnv-cultural-2026'

export type EventItem = {
  id: EventId
  image?: string
  hasDetail?: boolean
  gallery?: string[]
  video?: string
}

export const EVENTS: EventItem[] = [
  {
    id: 'dnv-cultural-2026',
    image: flyDna2026Img,
    hasDetail: true,
    gallery: [flyDna2026Img],
  },
  {
    id: 'capoeirinha',
    image: flyCapoeirinhaImg,
    hasDetail: true,
    gallery: [flyCapoeirinhaImg],
  },
  {
    id: 'dnv-cultural-2025',
    image: workshopFumacaImg,
    hasDetail: true,
    gallery: [flyDna2025Img, workshopFumacaImg, camisaDna2025Img, fotoDna2025Img],
    video: videoDna2025,
  },
]

export function getEventById(id: EventId): EventItem | undefined {
  return EVENTS.find((event) => event.id === id)
}
