import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

  return (
    <div>
        <div className="container-fluid sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                    <NavLink to="/" className="navbar-brand">
                        <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/home" className={() => location.pathname === "/" || location.pathname === "/home" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
                            <NavLink to="/about" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>About</NavLink>
                            <NavLink to="/services" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Services</NavLink>
                            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Projects</NavLink>
                            <NavLink to="/features" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Features</NavLink>
                            <NavLink to="/team" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Our Team</NavLink>
                            <NavLink to="/faqs" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>FAQs</NavLink>
                            <NavLink to="/testimonial" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Testimonial</NavLink>
                            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
                        </div>
                        <button type="button" className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal"
                            data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar