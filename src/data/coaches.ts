import fabricioImg from '../assets/image/professores/fabricio.jpg'
import samuraiImg from '../assets/image/professores/samurai.jpg'
import esquiloImg from '../assets/image/professores/esquilo.jpg'
import coqueiroImg from '../assets/image/professores/coqueiro.jpg'

export type CoachId = 'fabricio' | 'samurai' | 'esquilo' | 'coqueiro'

export type Coach = {
  id: CoachId
  image: string
  instagram?: string
}

export const COACHES: Coach[] = [
  { id: 'fabricio', image: fabricioImg, instagram: 'fabriciosalerno1' },
  { id: 'samurai', image: samuraiImg },
  { id: 'esquilo', image: esquiloImg, instagram: 'esquilo.nago' },
  { id: 'coqueiro', image: coqueiroImg, instagram: 'c04ch_m4ny_' },
]
