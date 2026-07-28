import type { CountryCode } from '../components/CountryFlag'
import andrePhoto from '../assets/image/mestrespagos/andre.jpeg'
import falcaoPhoto from '../assets/image/mestrespagos/falcao.jpeg'
import alfPhoto from '../assets/image/mestrespagos/alf.jpeg'

export type GenealogyMember = {
  name: string
  country: CountryCode
  countryLabel: string
}

export type FeaturedMasterId = 'alf' | 'andre' | 'falcao'

export type FeaturedMaster = GenealogyMember & {
  id: FeaturedMasterId
  photo: string
  /** Handle do Instagram sem @. Vazio = ocultar link. */
  instagram?: string
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
]

/** Demais mestres formados (coluna direita). */
export const NAGO_OTHER_MASTERS: GenealogyMember[] = [
  { name: 'Mestre Fabrício', country: 'gb', countryLabel: 'Inglaterra' },
  { name: 'Mestre Geb-Ac', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Douglas-PE', country: 'br', countryLabel: 'Brasil' },
  { name: 'Mestre Polegar', country: 'gb', countryLabel: 'Inglaterra' },
  { name: 'Mestre Chicão', country: 'es', countryLabel: 'Espanha' },
  { name: 'Mestre Turracha', country: 'us', countryLabel: 'EUA' },
  { name: 'Mestre Rafaela', country: 'us', countryLabel: 'EUA' },
  { name: 'Mestre Rogerinho', country: 'de', countryLabel: 'Alemanha' },
  { name: 'Mestre Galo', country: 'at', countryLabel: 'Áustria' },
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
]

export function getFeaturedMaster(id: FeaturedMasterId) {
  return NAGO_FEATURED_MASTERS.find((master) => master.id === id)
}
