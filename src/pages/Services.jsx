import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, ServiceComponent, Testimonial } from '../components/services'

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <ServiceComponent />
      <Testimonial />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default Services