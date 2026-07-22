import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { ProductId } from '../../data/products'
import { cartItemKey } from '../../data/products'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../ProductCard'
import ProductsCart, { type CartItem } from '../ProductsCart'
import FadeIn from '../FadeIn'
import './ProductsSection.css'

export default function ProductsSection() {
  const { t } = useTranslation()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((productId: ProductId, size?: string) => {
    setCartItems((prev) => {
      const key = cartItemKey(productId, size)
      const existing = prev.find((item) => cartItemKey(item.productId, item.size) === key)
      if (existing) {
        return prev.map((item) =>
          cartItemKey(item.productId, item.size) === key
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { productId, size, quantity: 1 }]
    })
  }, [])

  const setQuantity = useCallback((productId: ProductId, quantity: number, size?: string) => {
    const key = cartItemKey(productId, size)
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => cartItemKey(item.productId, item.size) !== key)
      return prev.map((item) =>
        cartItemKey(item.productId, item.size) === key ? { ...item, quantity } : item,
      )
    })
  }, [])

  const removeItem = useCallback((productId: ProductId, size?: string) => {
    const key = cartItemKey(productId, size)
    setCartItems((prev) => prev.filter((item) => cartItemKey(item.productId, item.size) !== key))
  }, [])

  return (
    <section id="produtos" className="products section">
      <div className="container">
        <FadeIn delay={0}>
          <div className="products__header">
            <span className="products__label">{t('products.label')}</span>
            <h2 className="products__title">{t('products.title')}</h2>
            <p className="products__subtitle">{t('products.subtitle')}</p>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="products__lead">{t('products.lead')}</p>
        </FadeIn>

        <div className="products__grid">
          {PRODUCTS.map((product, i) => (
            <FadeIn key={product.id} delay={180 + i * 60}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p className="products__note">{t('products.note')}</p>
        </FadeIn>
      </div>

      <ProductsCart
        items={cartItems}
        open={cartOpen}
        onOpen={() => setCartOpen(true)}
        onClose={() => setCartOpen(false)}
        onSetQuantity={setQuantity}
        onRemove={removeItem}
      />
    </section>
  )
}
