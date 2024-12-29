import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, ContactComponent } from '../components/contact'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <ContactComponent />
      
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Contact