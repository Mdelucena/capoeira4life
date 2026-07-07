import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductsSection from '../components/sections/ProductsSection'
import BookClassSection from '../components/sections/BookClassSection'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsSection />
        <BookClassSection />
      </main>
      <Footer />
    </>
  )
}
