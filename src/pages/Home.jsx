import React from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, About, Case, FAQs, Feature, Service, Team, Testimonial } from '../components/home'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FullScreenSearch />

        <About />
        <Service />
        <Feature />
        <Case />
        <FAQs />
        <Team />
        <Testimonial />

        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home