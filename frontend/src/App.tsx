
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RequestSupport from './pages/RequestSupport'
import Navbar from './layouts/Navbar'
function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/request-support" element={<RequestSupport />} /> 
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

