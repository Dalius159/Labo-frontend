import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, BlogComponent, PageHeader } from '../components/blog'

const Blog = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <BlogComponent />

      <Footer />
    </div>
  )
}

export default Blog