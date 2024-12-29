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
                            <div className="nav-item dropdown">
                                <NavLink to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu bg-light mt-2">
                                    <NavLink to="/features" className="dropdown-item">Features</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/faqs" className="dropdown-item">FAQs</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                    <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
                                </div>
                            </div>
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