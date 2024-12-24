import React from 'react'

import { Header, Footer, Fact } from '../../components/common';
import { Navbar, MemberList, PageHeader } from '../../components/service'

const DigitalMarketing = () => {
  return (
    <div>
        <Header />

        <Navbar />
        <PageHeader />
        <Fact />
        <MemberList service_name={"Digital Marketing"} />

        <Footer />
    </div>
  )
}

export default DigitalMarketing