import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import GownDetails from './pages/GownDetails'
import MyBookings from './pages/MyBookings'
import Gown from './pages/Gown'

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gown-details:id' element={<GownDetails/>}/> 
        <Route path='/gowns' element={<Gown/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/> 
      </Routes>
    </>
  )
}

export default App