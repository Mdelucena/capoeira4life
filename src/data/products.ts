import agogoImg from '../assets/image/produtos/agogo.jpeg'
import atabaqueImg from '../assets/image/produtos/atabaque.jpeg'
import berimbau1Img from '../assets/image/produtos/berimbau1.jpeg'
import berimbau2Img from '../assets/image/produtos/berimbau2.jpeg'
import berimbau3Img from '../assets/image/produtos/berimbau3.jpeg'
import camisaCalcaNago1Img from '../assets/image/produtos/camisanago.jpeg'
import camisaCalcaNago2Img from '../assets/image/produtos/camisanago2.jpeg'
import camisaCapoeirinhaImg from '../assets/image/eventos/roupacapoeirinha.jpeg'
import pandeiroImg from '../assets/image/produtos/pandeiro.jpg'
import tenis1Img from '../assets/image/produtos/tenis1.jpeg'
import tenis2Img from '../assets/image/produtos/tenis2.jpeg'

export type ProductId =
  | 'agogo'
  | 'atabaque'
  | 'berimbau'
  | 'pandeiro'
  | 'tenis'
  | 'camisa-capoeirinha'
  | 'camisa-calca-nago'

export type Product = {
  id: ProductId
  images: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'camisa-capoeirinha',
    images: [camisaCapoeirinhaImg],
  },
  {
    id: 'camisa-calca-nago',
    images: [camisaCalcaNago1Img, camisaCalcaNago2Img],
  },
  {
    id: 'tenis',
    images: [tenis1Img, tenis2Img],
  },
  {
    id: 'agogo',
    images: [agogoImg],
  },
  {
    id: 'atabaque',
    images: [atabaqueImg],
  },
  {
    id: 'berimbau',
    images: [berimbau1Img, berimbau2Img, berimbau3Img],
  },
  {
    id: 'pandeiro',
    images: [pandeiroImg],
  },
]
