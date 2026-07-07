import { useTranslation } from 'react-i18next'
import { PRODUCTS } from '../../data/products'
import ProductCard from '../ProductCard'
import FadeIn from '../FadeIn'
import './ProductsSection.css'

export default function ProductsSection() {
  const { t } = useTranslation()

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
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p className="products__note">{t('products.note')}</p>
        </FadeIn>
      </div>
    </section>
  )
}
