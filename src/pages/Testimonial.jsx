import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, TestimonialComponent } from '../components/testimonial'

const Testimonial = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <TestimonialComponent />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default Testimonial