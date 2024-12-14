import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, ContactComponent, PageHeader } from '../components/contact'

const Contact = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <ContactComponent />

      <Footer />
    </div>
  )
}

export default Contact