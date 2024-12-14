import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, AboutComponent, Team, PageHeader } from '../components/about'

const About = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <AboutComponent />
      <Team />

      <Footer />
    </div>
  )
}

export default About