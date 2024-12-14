import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, ServiceComponent, PageHeader } from '../components/service'

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