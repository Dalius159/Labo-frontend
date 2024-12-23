import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, ServiceComponent, PageHeader } from '../components/service'
import { DigitalMarketing, WebDesign, WebDevelopment, UIUXDesign, WebSecurity, Programming } from './service_pages'

const Service = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <ServiceComponent />

      <Footer />
    </div> 
  )
}

export default Service