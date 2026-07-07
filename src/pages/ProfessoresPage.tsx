import Footer from '../components/Footer'
import Header from '../components/Header'
import CoachesSection from '../components/sections/CoachesSection'
import BookClassSection from '../components/sections/BookClassSection'

export default function ProfessoresPage() {
  return (
    <>
      <Header />
      <main>
        <CoachesSection />
        <BookClassSection />
      </main>
      <Footer />
    </>
  )
}
