import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
