import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, AboutComponent, Team, Feature } from '../components/about'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <AboutComponent />
      <Feature />
      <Team />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default About