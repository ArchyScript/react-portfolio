import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AllProjects from './components/AllProjects'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      {/* <HomePage /> */}
      <Routes>
        {['/', '/home'].map((path) => (
          <Route path={path} element={<HomePage />} />
        ))}
        <Route path="/projects" element={<AllProjects />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
