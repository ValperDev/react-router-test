import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
