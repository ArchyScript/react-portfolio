import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AllProjects from './components/AllProjects'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      {/* <HomePage /> */}
      <Routes>
        {['/', '/home'].map((path) => (
          <Route path={path} key={path} element={<HomePage />} />
        ))}
        <Route path="/projects" element={<AllProjects />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
