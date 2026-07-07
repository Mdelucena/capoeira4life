import Footer from '../components/Footer'
import Header from '../components/Header'
import AcademySection from '../components/sections/AcademySection'
import BookClassSection from '../components/sections/BookClassSection'

export default function AcademyPage() {
  return (
    <>
      <Header />
      <main>
        <AcademySection />
        <BookClassSection />
      </main>
      <Footer />
    </>
  )
}
