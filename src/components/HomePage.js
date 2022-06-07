import React from 'react'
import Welcome from './Welcome'
import Contact from './Contact'
import Portfolio from './Projects'
import About from './About'
import Technologies from './Technologies'

function HomePage() {
  return (
    <div className="">
      <Welcome />

      <About />

      <Technologies />

      <Portfolio />

      <Contact />
    </div>
  )
}

export default HomePage
