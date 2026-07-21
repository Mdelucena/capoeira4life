import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

const HomePage = lazy(() => import('./pages/HomePage'))
const CapoeiraNagoPage = lazy(() => import('./pages/CapoeiraNagoPage'))
const CapoeirinhaPage = lazy(() => import('./pages/CapoeirinhaPage'))
const AcademyPage = lazy(() => import('./pages/AcademyPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProfessoresPage = lazy(() => import('./pages/ProfessoresPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))

function PageFallback() {
  return <div className="page-fallback" aria-hidden="true" />
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/capoeira-nago" element={<CapoeiraNagoPage />} />
          <Route path="/capoeirinha" element={<CapoeirinhaPage />} />
          <Route path="/academia" element={<AcademyPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/professores" element={<ProfessoresPage />} />
          <Route path="/eventos" element={<EventsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
