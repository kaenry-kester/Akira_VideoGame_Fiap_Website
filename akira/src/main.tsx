import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes.tsx'
import CursorTrail from './components/CursorTrail/CursorTrails.tsx'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MainRoutes />
      <CursorTrail />
    </BrowserRouter>
  </StrictMode>,
)
