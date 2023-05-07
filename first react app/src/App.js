import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Layout from './pages/Layout/Layout'
import './style.css'
export default function App() {
  return (
      <Routes>
        <Route path='/'  element ={<Home/>}/>
        <Route path='/about' element={<About/>}/>
     </Routes>
  )
}
