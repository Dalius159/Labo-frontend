import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, Case, FAQs } from '../components/projects'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      <Case />
      <FAQs />

      <Newsletter />
      <Footer />
    </div>
  )
}

export default Projects