import Footer from '../components/Footer'
import Header from '../components/Header'
import EventsSection from '../components/sections/EventsSection'
import BookClassSection from '../components/sections/BookClassSection'

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <EventsSection />
        <BookClassSection />
      </main>
      <Footer />
    </>
  )
}
