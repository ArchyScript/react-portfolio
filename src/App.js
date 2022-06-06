import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
// import Example from './components/Welcome copy'
import Contact from './components/Contact'
import Portfolio from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main className=" md:pt-16">
        <Welcome />

        <About />

        <Technologies />

        <Portfolio />

        <Contact />

        {/* <Example /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
