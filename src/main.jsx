import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { CartProvider } from './contexts/CartProvider.jsx'
import { CountProvider } from './contexts/CountProvider.jsx'
import { LikeProvider } from './contexts/LikeProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LikeProvider>
        <CountProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CountProvider>
      </LikeProvider>
    </BrowserRouter>
  </StrictMode>
)
