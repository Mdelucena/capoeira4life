import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import HistorySection from '../components/sections/HistorySection'
import MastersSection from '../components/sections/MastersSection'
import PartnershipsSection from '../components/sections/PartnershipsSection'
import ExploreSection from '../components/sections/ExploreSection'
import ReviewsSection from '../components/sections/ReviewsSection'
import BookClassSection from '../components/sections/BookClassSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <AboutSection />
        <HistorySection />
        <MastersSection />
        <ExploreSection />
        <ReviewsSection />
        <PartnershipsSection />
        <BookClassSection />
      </main>
      <Footer />
    </>
  )
}
