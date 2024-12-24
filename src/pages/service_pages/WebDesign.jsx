import React from 'react'

import { Header, Footer, Fact } from '../../components/common';
import { Navbar, MemberList, PageHeader } from '../../components/service'

const WebDesign = () => {
  return (
    <div>
        <Header />

        <Navbar />
        <PageHeader />
        <Fact />
        <MemberList service_name={"Web Design"} />

        <Footer />
    </div>
  )
}

export default WebDesign