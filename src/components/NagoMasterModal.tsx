import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { FeaturedMaster } from '../data/nagoGenealogy'
import CountryFlag from './CountryFlag'
import './NagoMasterModal.css'

type NagoMasterModalProps = {
  master: FeaturedMaster
  onClose: () => void
}

export default function NagoMasterModal({ master, onClose }: NagoMasterModalProps) {
  const { t } = useTranslation()
  const baseKey = `nago.masters.${master.id}`
  const role = t(`${baseKey}.role`)
  const bioRaw = t(`${baseKey}.bio`, { returnObjects: true })
  const bio = Array.isArray(bioRaw) ? (bioRaw as string[]) : [String(bioRaw)]
  const instagram = master.instagram?.trim()
  const website = master.website?.trim()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="nago-master-modal" role="dialog" aria-modal="true" aria-labelledby="nago-master-modal-title">
      <button
        type="button"
        className="nago-master-modal__backdrop"
        onClick={onClose}
        aria-label={t('nago.masters.modalClose')}
      />

      <div className="nago-master-modal__panel">
        <button
          type="button"
          className="nago-master-modal__close"
          onClick={onClose}
          aria-label={t('nago.masters.modalClose')}
        >
          ×
        </button>

        <div className="nago-master-modal__header">
          <img
            src={master.photo}
            alt={master.name}
            className="nago-master-modal__photo"
            loading="lazy"
            decoding="async"
          />
          <p className="nago-master-modal__role">{role}</p>
          <h2 id="nago-master-modal-title" className="nago-master-modal__title">
            {master.name}
          </h2>
          <div className="nago-master-modal__meta">
            <CountryFlag
              code={master.country}
              label={master.countryLabel}
              className="nago-master-modal__flag"
            />
            <span>{master.countryLabel}</span>
          </div>
        </div>

        <div className="nago-master-modal__body">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        {(instagram || website) && (
          <div className="nago-master-modal__links">
            {instagram ? (
              <a
                href={`https://www.instagram.com/${instagram}/`}
                className="nago-master-modal__social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('nago.masters.instagram')} @{instagram}
              </a>
            ) : null}
            {website ? (
              <a
                href={website}
                className="nago-master-modal__website"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('nago.masters.website')}
              </a>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
