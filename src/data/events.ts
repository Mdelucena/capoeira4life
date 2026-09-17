import camisaDna2025Img from '../assets/image/eventos/camisadna2025.jpeg'
import flyDna2025Img from '../assets/image/eventos/flyprinicpaldna2025.jpeg'
import fotoDna2025Img from '../assets/image/eventos/fotodna2025pessoal.jpeg'
import workshopFumacaImg from '../assets/image/eventos/wordshopfumaca.jpeg'
import videoDna2025 from '../assets/image/eventos/videodna2025.mp4'
import flyDna2026Img from '../assets/image/eventos/DNA2026.jpg'
import contraGraiaDna2026Img from '../assets/image/eventos/contramestre-graia-dna2026.jpeg'
import contraGuinomoDna2026Img from '../assets/image/eventos/contramestre-guinomo-dna26.jpg'
import contraFeijaoDna2026Img from '../assets/image/eventos/contramestre-feijao-dna26.jpg'
import mestreAlfDna2026Img from '../assets/image/eventos/mestre-alf-dna26.jpg'
import mestreSanhacoDna2026Img from '../assets/image/eventos/mestre-sanhaco-dna26.jpg'
import professorCafundoDna2026Img from '../assets/image/eventos/professor-cafundo-dna2026.jpeg'
import professorMilinhaDna2026Img from '../assets/image/eventos/professor-milinha-dna26.jpg'
import professorNegretDna2026Img from '../assets/image/eventos/professor-negret-dna26.jpg'
import professorPipocaDna2026Img from '../assets/image/eventos/professor-pipoca-dna26.jpg'
import professoraAreiaDna2026Img from '../assets/image/eventos/professora-areia-dna26.jpg'
import camisaProfDna2026Img from '../assets/image/eventos/roupadnaprofessores2026.jpeg'
import camisaDna2026Img from '../assets/image/eventos/roupadna2036.jpeg'
import flyCapoeirinhaImg from '../assets/image/eventos/capoeirinha.jpg'
import roupaCapoeirinhaImg from '../assets/image/produtos/capoeirinha.jpeg'

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
    gallery: [
      // Fly principal
      flyDna2026Img,
      // Contramestres
      contraGraiaDna2026Img,
      contraGuinomoDna2026Img,
      contraFeijaoDna2026Img,
      // Mestres
      mestreAlfDna2026Img,
      mestreSanhacoDna2026Img,
      // Professores
      professorCafundoDna2026Img,
      professorMilinhaDna2026Img,
      professorNegretDna2026Img,
      professorPipocaDna2026Img,
      professoraAreiaDna2026Img,
      // Camisas
      camisaProfDna2026Img,
      camisaDna2026Img,
    ],
  },
  {
    id: 'capoeirinha',
    image: flyCapoeirinhaImg,
    hasDetail: true,
    gallery: [flyCapoeirinhaImg, roupaCapoeirinhaImg],
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
