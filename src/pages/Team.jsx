import React from 'react'

import { Header, Footer, Fact } from '../components/common';
import { Navbar, MemberList, TeamComponent, PageHeader } from '../components/team'

const Team = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <PageHeader />
      <Fact />
      <MemberList />

      <Footer />
    </div>
  )
}

export default Team