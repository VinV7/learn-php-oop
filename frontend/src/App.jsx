import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'


function App() {
  return (
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/homepage" element={<Home/>}/>
      </Routes>
  )
}

export default App
