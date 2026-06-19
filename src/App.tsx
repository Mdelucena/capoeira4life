import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import CapoeiraNagoPage from './pages/CapoeiraNagoPage'
import CapoeirinhaPage from './pages/CapoeirinhaPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capoeira-nago" element={<CapoeiraNagoPage />} />
        <Route path="/capoeirinha" element={<CapoeirinhaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
