import React from 'react'

const Feature = () => {
  return (
    <div>
        <div className="container-fluid bg-primary feature pt-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
                        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose Us</div>
                        <h1 className="text-white mb-4">We're Best in AI Industry with 10 Years of Experience</h1>
                        <p className="text-light mb-4">With a decade of expertise, we specialize in delivering cutting-edge AI solutions. 
                            Our experience ensures top-notch performance, innovation, and results.</p>
                        <div className="d-flex align-items-center text-white mb-3">
                            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                <i className="fa fa-check"></i>
                            </div>
                            <span>Proven Track Record: Delivering impactful AI solutions for various industries.</span>
                        </div>
                        <div className="d-flex align-items-center text-white mb-3">
                            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                <i className="fa fa-check"></i>
                            </div>
                            <span>Innovative Approach: Leveraging the latest technologies for superior outcomes.</span>
                        </div>
                        <div className="d-flex align-items-center text-white mb-3">
                            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                                <i className="fa fa-check"></i>
                            </div>
                            <span>Trusted Expertise: Serving clients with a deep understanding of AI and its applications.</span>
                        </div>
                        <div className="row g-4 pt-3">
                            <div className="col-sm-6">
                                <div className="d-flex rounded p-3" style={{background: 'rgba(256, 256, 256, 0.1)'}}>
                                    <i className="fa fa-home fa-3x text-white"></i>
                                    <div className="ms-3">
                                        <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                        <p className="text-white mb-0">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex rounded p-3" style={{background: 'rgba(256, 256, 256, 0.1)'}}>
                                    <i className="fa fa-home fa-3x text-white"></i>
                                    <div className="ms-3">
                                        <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                                        <p className="text-white mb-0">Project Complete</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-md-end wow fadeIn" data-wow-delay="0.5s">
                        <img className="img-fluid" src="/src/assets/img/feature.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature