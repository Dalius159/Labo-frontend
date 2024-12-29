import React, { useState } from 'react'
import { Navbar, FullScreenSearch, Newsletter, Footer } from '../components/common'
import { Hero, TeamComponent, Member } from '../components/team'

const OurTeam = () => {

  const [showTeam, setShowTeam] = useState(false);

  const handleReadMore = () => {
    setShowTeam(true);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <FullScreenSearch />

      {showTeam ? (<Member />) : (<TeamComponent onReadMore={handleReadMore} />)}

      <Newsletter />
      <Footer />
    </div>
  )
}

export default OurTeam