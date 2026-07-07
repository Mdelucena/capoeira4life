import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import CapoeiraNagoPage from './pages/CapoeiraNagoPage'
import CapoeirinhaPage from './pages/CapoeirinhaPage'
import AcademyPage from './pages/AcademyPage'
import ProductsPage from './pages/ProductsPage'
import ProfessoresPage from './pages/ProfessoresPage'
import EventsPage from './pages/EventsPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capoeira-nago" element={<CapoeiraNagoPage />} />
        <Route path="/capoeirinha" element={<CapoeirinhaPage />} />
        <Route path="/academia" element={<AcademyPage />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/professores" element={<ProfessoresPage />} />
        <Route path="/eventos" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
