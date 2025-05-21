import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './components/landingPage'
function App() {
   

  return (
    <>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
        </Routes>
    </>
  )
}

export default App
