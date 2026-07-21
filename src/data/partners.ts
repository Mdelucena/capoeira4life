import dbroaLogo from '../assets/image/parceiros/Dbroa-logo-1.png'
import polimaxLogo from '../assets/image/parceiros/polimax.jfif'
import lambertLogo from '../assets/image/parceiros/lambert.png'

export type Partner = {
  id: string
  name: string
  image: string
  url: string
}

export const PARTNERS: Partner[] = [
  {
    id: 'lambert',
    name: 'Lambert Sports Clinic',
    image: lambertLogo,
    url: 'https://lambertmedicalpractice.co.uk/',
  },
  {
    id: 'dbroa',
    name: "D'Broa Padaria e Delicatessen",
    image: dbroaLogo,
    url: 'https://dbroa.co.uk/',
  },
  {
    id: 'polimax',
    name: 'Polimax',
    image: polimaxLogo,
    url: 'https://www.polimax.co.uk/',
  },
]
