import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, TestimonialComponent, PageHeader } from '../components/testimonial'

const Testimonial = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <TestimonialComponent />

      <Footer />
    </div>
  )
}

export default Testimonial