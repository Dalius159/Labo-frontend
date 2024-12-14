import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, NotFound404, PageHeader } from '../components/404'

const NotFound = () => {
  return (
    <div>
        <Header />
        
        <Navbar />
        <PageHeader />
        <Fact />
        <NotFound404 />

        <Footer />
    </div>
  )
}

export default NotFound