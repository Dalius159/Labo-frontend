import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container-fluid bg-dark text-white-50 footer pt-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                        <a href="index.html" className="d-inline-block mb-3">
                            <h1 className="text-white">AI<span className="text-primary">.</span>Tech</h1>
                        </a>
                        <p className="mb-0">Leading AI and machine learning solutions for business growth. We specialize in automation, 
                            predictive analysis, and more to drive success.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                        <h5 className="text-white mb-4">Popular Link</h5>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Career</a>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                        <h5 className="text-white mb-4">Our Services</h5>
                        <a className="btn btn-link" href="">Robotic Automation</a>
                        <a className="btn btn-link" href="">Machine learning</a>
                        <a className="btn btn-link" href="">Predictive Analysis</a>
                        <a className="btn btn-link" href="">Data Science</a>
                        <a className="btn btn-link" href="">Robot Technology</a>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up"></i></a>
    </div>
  )
}

export default Footer