import Header from '../components/Header'
import Footer from '../components/Footer'
import CapoeiraNagoSection from '../components/sections/CapoeiraNagoSection'
import BookClassSection from '../components/sections/BookClassSection'

export default function CapoeiraNagoPage() {
  return (
    <>
      <Header />
      <main>
        <CapoeiraNagoSection />
        <BookClassSection />
      </main>
      <Footer />
    </>
  )
}
