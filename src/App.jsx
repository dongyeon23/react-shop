import './App.scss'
import { Tabs } from './components/tabs'
import { Cart } from './components/cart'
import { Like } from './components/like'
import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";

function App() {
  const [toggleLike, setToggleLike] = useState(false)
  const navigateToCart = useNavigate()

  // function handleCount(type) {
  //   setCount((prev) => type === "plus" ? prev + 1 : prev - 1)
  // }

  return (
    <>
    <button onClick={()=>navigateToCart('/tabs')}>Main</button>
    <button onClick={()=>navigateToCart('/cart')}>Cart</button>
    <button onClick={()=>navigateToCart('/like')}>Like</button>
    <Routes>
      <Route path="/" element={<Navigate to="/tabs" />} />
      <Route path='/tabs' element={<Tabs/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/like' element={<Like/>} />
    </Routes>
    </>
  )
}

export default App
