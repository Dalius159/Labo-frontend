import React from 'react'

const Case = () => {
  return (
    <div>
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Case Study</div>
                    <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="case-item position-relative overflow-hidden rounded mb-2">
                            <img className="img-fluid" src="/src/assets/img/project-1.jpg" alt="" />
                            <a className="case-overlay text-decoration-none" href="/projects">
                                <small>Robotic Automation</small>
                                <h5 className="lh-base text-white mb-3">See how robotic automation drives efficiency and innovation.
                                </h5>
                                <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="case-item position-relative overflow-hidden rounded mb-2">
                            <img className="img-fluid" src="/src/assets/img/project-2.jpg" alt="" />
                            <a className="case-overlay text-decoration-none" href="/projects">
                                <small>Machine learning</small>
                                <h5 className="lh-base text-white mb-3">See how machine learning drives business innovation.
                                </h5>
                                <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                        <div className="case-item position-relative overflow-hidden rounded mb-2">
                            <img className="img-fluid" src="/src/assets/img/project-3.jpg" alt="" />
                            <a className="case-overlay text-decoration-none" href="/projects">
                                <small>Predictive Analysis</small>
                                <h5 className="lh-base text-white mb-3">Discover how predictive analysis shapes business strategies.
                                </h5>
                                <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Case