import './App.css'
import { About, Blog, Contact, Home, NotFound, Project, Service, Team, Testimonial } from './pages'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
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
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
