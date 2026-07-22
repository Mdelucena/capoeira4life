import agogoImg from '../assets/image/produtos/agogo.jpeg'
import atabaqueImg from '../assets/image/produtos/atabaque.jpeg'
import berimbau1Img from '../assets/image/produtos/berimbau1.jpeg'
import berimbau2Img from '../assets/image/produtos/berimbau2.jpeg'
import berimbau3Img from '../assets/image/produtos/berimbau3.jpeg'
import camisaCalcaNago1Img from '../assets/image/produtos/camisanago.jpeg'
import camisaCalcaNago2Img from '../assets/image/produtos/camisanago2.jpeg'
import camisaCapoeirinhaImg from '../assets/image/produtos/capoeirinha.jpeg'
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
  /** Tamanhos/numerações disponíveis (roupas e calçados). */
  sizes?: string[]
}

export const CLOTHING_SIZES = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const
export const KIDS_CLOTHING_SIZES = ['2', '4', '6', '8', '10', '12', '14'] as const
export const SHOE_SIZES = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] as const

export const PRODUCTS: Product[] = [
  {
    id: 'camisa-capoeirinha',
    images: [camisaCapoeirinhaImg],
    sizes: [...KIDS_CLOTHING_SIZES],
  },
  {
    id: 'camisa-calca-nago',
    images: [camisaCalcaNago1Img, camisaCalcaNago2Img],
    sizes: [...CLOTHING_SIZES],
  },
  {
    id: 'tenis',
    images: [tenis1Img, tenis2Img],
    sizes: [...SHOE_SIZES],
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

export function cartItemKey(productId: ProductId, size?: string) {
  return size ? `${productId}::${size}` : productId
}

/** Label de tamanho/numeração conforme o idioma atual. */
export function getProductSizeLabel(
  t: (key: string, options?: { defaultValue?: string }) => string,
  size: string,
) {
  return t(`products.sizes.${size}`, { defaultValue: size })
}
