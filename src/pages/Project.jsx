import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, ProjectComponent, PageHeader } from '../components/project'

const Project = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <ProjectComponent />

      <Footer />
    </div>
  )
}

export default Project