import React from 'react'

import { Header, Footer, Fact } from '../../components/common';
import { Navbar, MemberList, PageHeader } from '../../components/service'

const Programming = () => {
  return (
    <div>
        <Header />

        <Navbar />
        <PageHeader />
        <Fact />
        <MemberList service_name={"Programming"} />

        <Footer />
    </div>
  )
}

export default Programming