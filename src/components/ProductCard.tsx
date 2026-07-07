import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Product } from '../data/products'
import { formatWhatsAppField, openWhatsAppMessage } from '../utils/whatsappForm'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation()
  const [imageIndex, setImageIndex] = useState(0)

  const title = t(`products.items.${product.id}.title`)
  const description = t(`products.items.${product.id}.description`)
  const price = t(`products.items.${product.id}.price`)

  const totalImages = product.images.length
  const currentImage = product.images[imageIndex]
  const hasMultipleImages = totalImages > 1

  function goPrev() {
    setImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  function goNext() {
    setImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  function handleOrder() {
    const message = [
      t('products.whatsappIntro'),
      '',
      formatWhatsAppField(t('products.whatsappProductLabel'), title),
      '',
      t('products.whatsappClosing'),
    ].join('\n')

    openWhatsAppMessage(message)
  }

  return (
    <article className="product-card">
      <div className="product-card__media">
        {currentImage ? (
          <>
            <img
              src={currentImage}
              alt={title}
              className="product-card__image"
            />
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  className="product-card__arrow product-card__arrow--prev"
                  onClick={goPrev}
                  aria-label={t('products.prevPhoto')}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="product-card__arrow product-card__arrow--next"
                  onClick={goNext}
                  aria-label={t('products.nextPhoto')}
                >
                  →
                </button>
                <span className="product-card__counter">
                  {imageIndex + 1} / {totalImages}
                </span>
              </>
            )}
          </>
        ) : (
          <div className="product-card__placeholder">
            <span>{t('products.photoPlaceholder')}</span>
          </div>
        )}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">{price}</p>
        <button type="button" className="product-card__order" onClick={handleOrder}>
          {t('products.orderButton')}
        </button>
      </div>
    </article>
  )
}
