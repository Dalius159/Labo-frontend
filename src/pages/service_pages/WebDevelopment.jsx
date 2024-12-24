import React from 'react'

import { Header, Footer, Fact } from '../../components/common';
import { Navbar, MemberList, PageHeader } from '../../components/service'

const WebDevelopment = () => {
  return (
    <div>
        <Header />

        <Navbar />
        <PageHeader />
        <Fact />
        <MemberList service_name={"Web Development"} />

        <Footer />
    </div>
  )
}

export default WebDevelopment