import React from 'react'

import { Header, Footer, Fact } from '../../components/common';
import { Navbar, MemberList, PageHeader } from '../../components/service'

const WebSecurity = () => {
  return (
    <div>
        <Header />

        <Navbar />
        <PageHeader />
        <Fact />
        <MemberList service_name={"Web Security"} />

        <Footer />
    </div>
  )
}

export default WebSecurity