import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingUp from './pages/SingUp'

function App() {

 return (
  <>
  
  <Header />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<SingUp />} />
  </Routes>

  <Footer />
  </>
 )

}

export default App
