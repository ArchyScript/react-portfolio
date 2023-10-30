import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import { HomePage, ProjectsPage } from './pages'
import { Navbar, Footer } from './components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      {/* <HomePage /> */ }
      <Routes>
        { ['/', '/home'].map((path) => (
          <Route path={ path } key={ path } element={ <HomePage /> } />
        )) }
        <Route path="/projects" element={ <ProjectsPage /> } />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
