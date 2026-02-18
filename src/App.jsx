import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Acceuil from '../pages/Acceuil'


export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/Acceuil" replace />} />
          <Route path="/Acceuil" element={<Acceuil/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}