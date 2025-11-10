import React from 'react'
// styling cleared: removed App.css import
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Start from './pages/Start'
import Footer from './components/Footer'
import './index.css'
import './App.css'

export default function App(){
  return (
    <div className='body-container'>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/start" element={<Start/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
