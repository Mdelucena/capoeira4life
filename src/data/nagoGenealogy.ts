import type { CountryCode } from '../components/CountryFlag'
import andrePhoto from '../assets/image/mestrespagos/andre.jpeg'
import falcaoPhoto from '../assets/image/mestrespagos/falcao.jpeg'
import alfPhoto from '../assets/image/mestrespagos/alf.jpeg'
import douglasPhoto from '../assets/image/mestrespagos/douglas.jpeg'
import fabricioPhoto from '../assets/image/mestrespagos/fabricio.jpeg'
import galoPhoto from '../assets/image/mestrespagos/galo.jpeg'

export type GenealogyMember = {
  name: string
  country: CountryCode
  countryLabel: string
}

export type FeaturedMasterId = 'alf' | 'andre' | 'falcao' | 'douglas' | 'fabricio' | 'galo'

export type FeaturedMaster = GenealogyMember & {
  id: FeaturedMasterId
  photo: string
  /** Handle do Instagram sem @. Vazio = ocultar link. */
  instagram?: string
  /** Site próprio do mestre, se houver. */
  website?: string
}

/** Mestres em destaque (clicáveis, com modal). */
export const NAGO_FEATURED_MASTERS: FeaturedMaster[] = [
  {
    id: 'andre',
    name: 'Mestre Andre',
    country: 'us',
    countryLabel: 'EUA',
    photo: andrePhoto,
    instagram: 'andregusmao.academy',
  },
  {
    id: 'falcao',
    name: 'Mestre Falcão',
    country: 'es',
    countryLabel: 'Espanha',
    photo: falcaoPhoto,
    instagram: 'crossfighter_nago',
  },
  {
    id: 'alf',
    name: 'Mestre Alf',
    country: 'mt',
    countryLabel: 'Malta',
    photo: alfPhoto,
    instagram: 'jp_fitness_mt',
  },
  {
    id: 'douglas',
    name: 'Mestre Douglas',
    country: 'br',
    countryLabel: 'Brasil',
    photo: douglasPhoto,
    instagram: 'mestredouglasnago',
  },
  {
    id: 'fabricio',
    name: 'Mestre Fabrício',
    country: 'gb',
    countryLabel: 'Inglaterra',
    photo: fabricioPhoto,
    instagram: 'mestre.fabricio',
  },
  {
    id: 'galo',
    name: 'Mestre Galo',
    country: 'at',
    countryLabel: 'Áustria',
    photo: galoPhoto,
    instagram: 'mestr_galo',
    website: 'https://www.brazilian-combat-academy.com/',
  },
]

/** Demais mestres formados. */
export const NAGO_OTHER_MASTERS: GenealogyMember[] = [
  { name: 'Mestre Geb-Ac', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Polegar', country: 'gb', countryLabel: 'Inglaterra' },
  { name: 'Mestre Chicão', country: 'es', countryLabel: 'Espanha' },
  { name: 'Mestre Turracha', country: 'us', countryLabel: 'EUA' },
  { name: 'Mestre Rafaela', country: 'us', countryLabel: 'EUA' },
  { name: 'Mestre Rogerinho', country: 'de', countryLabel: 'Alemanha' },
  { name: 'Mestre Cobra', country: 'gb', countryLabel: 'Inglaterra' },
  { name: 'Mestre Faroeste', country: 'it', countryLabel: 'Itália' },
  { name: 'Mestre Kalunga-MT', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Sapo-MT', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Puga-AM', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Beiramar-MG', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Luciana-MT', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Adilson-SP', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Jacarandá-TO', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Tchoco-GO', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Caju-GO', country: 'br', countryLabel: 'Brasil' },
]

export function getFeaturedMaster(id: FeaturedMasterId) {
  return NAGO_FEATURED_MASTERS.find((master) => master.id === id)
}
