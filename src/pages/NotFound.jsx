import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, NotFoundComponent } from '../components/404'

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <NotFoundComponent />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default NotFound