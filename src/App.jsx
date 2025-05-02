import './App.scss'
import { Tabs } from './components/tabs'
import { Cart } from './components/cart'
import { useState } from 'react'
useState


function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Tabs cart={cart} setCart={setCart}/>
      <Cart cart={cart} setCart={setCart}/>
    </>
  )
}

export default App
