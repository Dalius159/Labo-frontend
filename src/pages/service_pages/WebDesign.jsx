import React from 'react'

import { Header, Footer, Fact } from '../../components/common';
import { Navbar, ServiceComponent, PageHeader } from '../../components/service'

const WebDesign = () => {
  return (
    <div>
        <Header />

        <Navbar />
        <PageHeader />
        <Fact />

        <Footer />
    </div>
  )
}

export default WebDesign