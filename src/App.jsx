import React from 'react'
import { About, Contact, FAQs, Features, Home, NotFound, OurTeam, Projects, Services, Testimonial } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/features' element={<Features />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App