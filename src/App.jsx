import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path="/" element={<Hero />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;