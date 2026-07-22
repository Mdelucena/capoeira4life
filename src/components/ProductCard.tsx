import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Product } from '../data/products'
import { getProductSizeLabel } from '../data/products'
import './ProductCard.css'

type ProductCardProps = {
  product: Product
  onAddToCart: (productId: Product['id'], size?: string) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { t } = useTranslation()
  const [imageIndex, setImageIndex] = useState(0)
  const [justAdded, setJustAdded] = useState(false)
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeError, setSizeError] = useState(false)

  const title = t(`products.items.${product.id}.title`)
  const description = t(`products.items.${product.id}.description`)
  const price = t(`products.items.${product.id}.price`)
  const hasSizes = Boolean(product.sizes?.length)

  const totalImages = product.images.length
  const currentImage = product.images[imageIndex]
  const hasMultipleImages = totalImages > 1

  function goPrev() {
    setImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  function goNext() {
    setImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  function handleAdd() {
    if (hasSizes && !selectedSize) {
      setSizeError(true)
      return
    }

    onAddToCart(product.id, hasSizes ? selectedSize : undefined)
    setJustAdded(true)
    setSizeError(false)
    window.setTimeout(() => setJustAdded(false), 1200)
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
              loading="lazy"
              decoding="async"
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

        {hasSizes && (
          <div className="product-card__sizes">
            <label className="product-card__sizes-label" htmlFor={`size-${product.id}`}>
              {product.id === 'tenis' ? t('products.sizeLabelShoes') : t('products.sizeLabelClothes')}
            </label>
            <select
              id={`size-${product.id}`}
              className={`product-card__sizes-select ${sizeError ? 'product-card__sizes-select--error' : ''}`}
              value={selectedSize}
              onChange={(event) => {
                setSelectedSize(event.target.value)
                setSizeError(false)
              }}
            >
              <option value="">{t('products.sizePlaceholder')}</option>
              {product.sizes?.map((size) => (
                <option key={size} value={size}>
                  {getProductSizeLabel(t, size)}
                </option>
              ))}
            </select>
            {sizeError && <p className="product-card__sizes-error">{t('products.sizeRequired')}</p>}
          </div>
        )}

        <button
          type="button"
          className={`product-card__order ${justAdded ? 'product-card__order--added' : ''}`}
          onClick={handleAdd}
        >
          {justAdded ? t('products.addedToCart') : t('products.addToCart')}
        </button>
      </div>
    </article>
  )
}
