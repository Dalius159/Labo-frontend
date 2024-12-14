import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Carousel, About, Blog, Contact, Project, Service, Team, Testimonial, Navbar } from '../components/home';


const Home = () => {
  return (
    <div>
        <Header />
        
        <Navbar />
        <Carousel />
        <Fact />
        <About />
        <Service />
        <Project />
        <Blog />
        <Team />
        <Testimonial />
        <Contact />

        <Footer />
    </div>
  )
}

export default Home