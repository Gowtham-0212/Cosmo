// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartContext from './context/CartContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CartContext>
    <App />
  </CartContext>
)
