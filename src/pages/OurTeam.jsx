import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, TeamComponent } from '../components/team'

const OurTeam = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <TeamComponent />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default OurTeam