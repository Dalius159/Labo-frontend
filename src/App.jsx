import './App.css'
import { About, Blog, Contact, Home, NotFound, Project, Service, Team, Testimonial } from './pages'
import { DigitalMarketing, WebDesign, WebDevelopment, UIUXDesign, WebSecurity, Programming } from './pages/service_pages'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
          <Routes>
            {/* main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />

            {/* service pages */}
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/uiux-design" element={<UIUXDesign />} />
            <Route path="/services/web-security" element={<WebSecurity />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/programming" element={<Programming />} />

            <Route path='/*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
