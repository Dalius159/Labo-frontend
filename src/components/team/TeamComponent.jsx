import React from 'react'

const TeamComponent = ({ onReadMore }) => {
  return (
    <div>
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Team</div>
                        <h1 className="mb-4">Meet Our Experienced Team Members</h1>
                        <p className="mb-4">Our team consists of highly skilled professionals with expertise in AI, machine learning, 
                            robotic automation, and more. Together, we work towards providing innovative solutions that drive success for 
                            your business. Each member brings unique knowledge and experience, ensuring that we deliver the best results 
                            for your needs.</p>
                        <a className="btn btn-primary rounded-pill px-4" href="" onClick={(e) => {
                            e.preventDefault();
                            onReadMore();
                        }}>Read More</a>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="row g-4">
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="team-item bg-white text-center rounded p-4 pt-0">
                                            <img className="img-fluid rounded-circle p-4" src="/src/assets/img/team-1.jpg" alt="" />
                                            <h5 className="mb-0">Boris Johnson</h5>
                                            <small>Founder & CEO</small>
                                            <div className="d-flex justify-content-center mt-3">
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="team-item bg-white text-center rounded p-4 pt-0">
                                            <img className="img-fluid rounded-circle p-4" src="/src/assets/img/team-2.jpg" alt="" />
                                            <h5 className="mb-0">Adam Crew</h5>
                                            <small>Executive Manager</small>
                                            <div className="d-flex justify-content-center mt-3">
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-md-4">
                                <div className="row g-4">
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="team-item bg-white text-center rounded p-4 pt-0">
                                            <img className="img-fluid rounded-circle p-4" src="/src/assets/img/team-3.jpg" alt="" />
                                            <h5 className="mb-0">Kate Winslet</h5>
                                            <small>Co Founder</small>
                                            <div className="d-flex justify-content-center mt-3">
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                        <div className="team-item bg-white text-center rounded p-4 pt-0">
                                            <img className="img-fluid rounded-circle p-4" src="/src/assets/img/team-4.jpg" alt="" />
                                            <h5 className="mb-0">Cody Gardner</h5>
                                            <small>Project Manager</small>
                                            <div className="d-flex justify-content-center mt-3">
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square btn-primary m-1" href=""><i
                                                        className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamComponent