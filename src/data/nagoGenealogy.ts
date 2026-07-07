import type { CountryCode } from '../components/CountryFlag'

export type GenealogyMember = {
  name: string
  country: CountryCode
  countryLabel: string
}

export const NAGO_GENEALOGY_ROOT = 'Mestre Pequinês'

export const NAGO_GENEALOGY_ROWS: [GenealogyMember, GenealogyMember][] = [
  [
    { name: 'Mestre Andre', country: 'us', countryLabel: 'EUA' },
    { name: 'Mestre Falcão', country: 'es', countryLabel: 'Espanha' },
  ],
  [
    { name: 'Mestre Fabrício', country: 'gb', countryLabel: 'Inglaterra' },
    { name: 'Mestre Geb-Ac', country: 'br', countryLabel: 'Brasil' },
  ],
  [
    { name: 'Mestre Douglas-PE', country: 'br', countryLabel: 'Brasil' },
    { name: 'Mestre Polegar', country: 'gb', countryLabel: 'Inglaterra' },
  ],
  [
    { name: 'Mestre Chicão', country: 'es', countryLabel: 'Espanha' },
    { name: 'Mestre Alf', country: 'mt', countryLabel: 'Malta' },
  ],
  [
    { name: 'Mestre Turracha', country: 'us', countryLabel: 'EUA' },
    { name: 'Mestre Rafaela', country: 'us', countryLabel: 'EUA' },
  ],
  [
    { name: 'Mestre Rogerinho', country: 'de', countryLabel: 'Alemanha' },
    { name: 'Mestre Galo', country: 'at', countryLabel: 'Áustria' },
  ],
  [
    { name: 'Mestre Cobra', country: 'gb', countryLabel: 'Inglaterra' },
    { name: 'Mestre Faroeste', country: 'it', countryLabel: 'Itália' },
  ],
  [
    { name: 'Mestre Kalunga-MT', country: 'br', countryLabel: 'Brasil' },
    { name: 'Mestre Sapo-MT', country: 'br', countryLabel: 'Brasil' },
  ],
  [
    { name: 'Mestre Puga-AM', country: 'br', countryLabel: 'Brasil' },
    { name: 'Mestre Beiramar-MG', country: 'br', countryLabel: 'Brasil' },
  ],
  [
    { name: 'Mestre Luciana-MT', country: 'br', countryLabel: 'Brasil' },
    { name: 'Mestre Adilson-SP', country: 'br', countryLabel: 'Brasil' },
  ],
  [
    { name: 'Mestre Jacarandá-TO', country: 'br', countryLabel: 'Brasil' },
    { name: 'Mestre Tchoco-GO', country: 'br', countryLabel: 'Brasil' },
  ],
]
