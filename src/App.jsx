import './App.scss'
import { Tabs } from './components/tabs'
import { Cart } from './components/cart'
import { Like } from './components/like'
import { Routes, Route, Link, Navigate } from "react-router-dom"
import { ItemDetail } from './components/itemDetail'
import { Header } from './components/header'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/tabs" />} />
      <Route path='/tabs' element={<Tabs/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/like' element={<Like/>} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
    </>
  )
}

export default App
