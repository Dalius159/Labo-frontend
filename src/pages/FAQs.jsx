import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, FAQsComponent } from '../components/FAQs'


const FAQs = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />
      
      <FAQsComponent />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default FAQs