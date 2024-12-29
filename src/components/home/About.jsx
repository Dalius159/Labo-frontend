import React from 'react'

const About = () => {
  return (
    <div>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img">
                            <img className="img-fluid" src="/src/assets/img/about-img.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
                        <h1 className="mb-4">We Make Your Business Smarter with Artificial Intelligence</h1>
                        <p className="mb-4">Artificial Intelligence (AI) is transforming businesses by improving efficiency, decision-making, 
                            and customer experience. By automating repetitive tasks, analyzing large data sets, and personalizing interactions, 
                            AI helps companies boost productivity and profitability. It also enables businesses to stay competitive by offering 
                            data-driven insights and innovative solutions.</p>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="/about">Read More</a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About