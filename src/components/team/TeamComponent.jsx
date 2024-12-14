import React from 'react'

const TeamComponent = () => {
  return (
    <div>
        {/* <!-- Team Start --> */}
        <div className="container-fluid py-5 my-5 team">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth:'600px'}}>
                    <h5 className="text-primary">Our Team</h5>
                    <h1>Meet our expert Team</h1>
                </div>
                <div className="owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s">
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="/assets/img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="/assets/img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="/assets/img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="/assets/img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
    </div>
  )
}

export default TeamComponent