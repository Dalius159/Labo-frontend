import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, FeatureComponent } from '../components/features'

const Features = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <FeatureComponent />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default Features