import React from 'react'

import Welcome from '../components/Home/Welcome'
import Contact from '../components/Home/Contact'
import Portfolio from '../components/Home/Projects'
import About from '../components/Home/About'
import Technologies from '../components/Home/Technologies'

function HomePage() {
    return (
        <div className="pb -64 sm:pb -48">
            <Welcome />
            <About />
            <Technologies />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default HomePage
