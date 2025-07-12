import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from '../component/Register.jsx'
import Login from '../component/Login.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Homepage from '../Homepage/Homepage.jsx'
import Footer from '../footer/Footer.jsx'
import AddEditProperty from '../properties/AddEditProperty.jsx'
import PropertyList from '../properties/Editanddelete.jsx'

function App() {
 

  return (
    <>
       <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-property" element={<AddEditProperty />} />
        <Route path="/properties" element={<PropertyList />} />
      </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
