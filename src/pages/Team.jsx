import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, TeamComponent, PageHeader } from '../components/team'

const Team = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <TeamComponent />

      <Footer />
    </div>
  )
}

export default Team