import { useEffect, useId, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { ProductId } from '../data/products'
import { PRODUCTS, cartItemKey, getProductSizeLabel } from '../data/products'
import { formatWhatsAppField, openWhatsAppMessage } from '../utils/whatsappForm'
import './ProductsCart.css'

export type CartItem = {
  productId: ProductId
  size?: string
  quantity: number
}

type ProductsCartProps = {
  items: CartItem[]
  open: boolean
  onOpen: () => void
  onClose: () => void
  onSetQuantity: (productId: ProductId, quantity: number, size?: string) => void
  onRemove: (productId: ProductId, size?: string) => void
}

export default function ProductsCart({
  items,
  open,
  onOpen,
  onClose,
  onSetQuantity,
  onRemove,
}: ProductsCartProps) {
  const { t } = useTranslation()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  function handleCheckout() {
    if (items.length === 0) return

    const lines = [
      t('products.whatsappIntro'),
      '',
      t('products.whatsappCartLabel'),
      ...items.map((item) => {
        const title = t(`products.items.${item.productId}.title`)
        const sizePart = item.size
          ? ` — ${t('products.whatsappSizeLabel')}: ${getProductSizeLabel(t, item.size)}`
          : ''
        return `• ${title}${sizePart} — ${t('products.whatsappQuantityLabel')}: ${item.quantity}`
      }),
      '',
      formatWhatsAppField(t('products.whatsappTotalItemsLabel'), String(totalUnits)),
      '',
      t('products.whatsappClosing'),
    ]

    openWhatsAppMessage(lines.join('\n'))
  }

  return (
    <>
      <button
        type="button"
        className={`products-cart-fab ${totalUnits > 0 ? 'products-cart-fab--active' : ''}`}
        onClick={onOpen}
        aria-label={t('products.cartOpen', { count: totalUnits })}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="products-cart-fab__icon">
          <path
            fill="currentColor"
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21.08 5H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42l.74-1.35z"
          />
        </svg>
        {totalUnits > 0 && <span className="products-cart-fab__badge">{totalUnits}</span>}
      </button>

      {open && (
        <div className="products-cart" role="presentation">
          <button
            type="button"
            className="products-cart__backdrop"
            aria-label={t('products.cartClose')}
            onClick={onClose}
          />

          <div
            className="products-cart__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <header className="products-cart__header">
              <h2 id={titleId} className="products-cart__title">
                {t('products.cartTitle')}
              </h2>
              <button
                ref={closeRef}
                type="button"
                className="products-cart__close"
                onClick={onClose}
                aria-label={t('products.cartClose')}
              >
                ×
              </button>
            </header>

            {items.length === 0 ? (
              <p className="products-cart__empty">{t('products.cartEmpty')}</p>
            ) : (
              <ul className="products-cart__list">
                {items.map((item) => {
                  const product = PRODUCTS.find((entry) => entry.id === item.productId)
                  const title = t(`products.items.${item.productId}.title`)
                  const image = product?.images[0]
                  const key = cartItemKey(item.productId, item.size)

                  return (
                    <li key={key} className="products-cart__item">
                      <div className="products-cart__thumb">
                        {image ? (
                          <img src={image} alt="" loading="lazy" decoding="async" />
                        ) : (
                          <span>{t('products.photoPlaceholder')}</span>
                        )}
                      </div>

                      <div className="products-cart__info">
                        <p className="products-cart__name">{title}</p>
                        {item.size && (
                          <p className="products-cart__size">
                            {t('products.cartSize')}:{' '}
                            <strong>{getProductSizeLabel(t, item.size)}</strong>
                          </p>
                        )}
                        <div className="products-cart__qty">
                          <button
                            type="button"
                            className="products-cart__qty-btn"
                            onClick={() =>
                              onSetQuantity(item.productId, item.quantity - 1, item.size)
                            }
                            aria-label={t('products.cartDecrease', { product: title })}
                          >
                            −
                          </button>
                          <span className="products-cart__qty-value" aria-live="polite">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="products-cart__qty-btn"
                            onClick={() =>
                              onSetQuantity(item.productId, item.quantity + 1, item.size)
                            }
                            aria-label={t('products.cartIncrease', { product: title })}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="products-cart__remove"
                        onClick={() => onRemove(item.productId, item.size)}
                      >
                        {t('products.cartRemove')}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}

            <footer className="products-cart__footer">
              <button
                type="button"
                className="products-cart__checkout"
                onClick={handleCheckout}
                disabled={items.length === 0}
              >
                {t('products.cartCheckout')}
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}
