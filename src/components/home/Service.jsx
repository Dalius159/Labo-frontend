import React from 'react'

const Service = () => {
  return (
    <div>
        <div className="container-fluid bg-light mt-5 py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                        <h1 className="mb-4">Our Excellent AI Solutions for Your Business</h1>
                        <p className="mb-4">Unlock the power of Artificial Intelligence with our tailored solutions designed
                             to optimize your business operations. From automating routine tasks to providing actionable insights through 
                             data analysis, our AI tools enhance productivity, improve decision-making, and create personalized customer 
                             experiences. Whether it's AI-driven chatbots, predictive analytics, or intelligent automation, we help your 
                             business stay ahead of the competition and achieve sustainable growth. Let us transform your business with 
                             cutting-edge AI solutions.</p>
                        <a className="btn btn-primary rounded-pill px-4" href="/services">Read More</a>
                    </div>
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="row g-4">
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                            <div className="service-icon btn-square">
                                                <i className="fa fa-robot fa-2x"></i>
                                            </div>
                                            <h5 className="mb-3">Robotic Automation</h5>
                                            <p>Streamline tasks, reduce errors, and boost efficiency with our robotic automation solutions.</p>
                                            <a className="btn px-3 mt-auto mx-auto" href="/services">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                            <div className="service-icon btn-square">
                                                <i className="fa fa-power-off fa-2x"></i>
                                            </div>
                                            <h5 className="mb-3">Machine learning</h5>
                                            <p>Unlock insights, improve decision-making, and automate processes with our machine learning solutions.</p>
                                            <a className="btn px-3 mt-auto mx-auto" href="/services">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-md-4">
                                <div className="row g-4">
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                            <div className="service-icon btn-square">
                                                <i className="fa fa-graduation-cap fa-2x"></i>
                                            </div>
                                            <h5 className="mb-3">Education & Science</h5>
                                            <p>Revolutionize learning and research with AI-driven solutions that enhance personalized education, 
                                                streamline research, and accelerate discoveries.</p>
                                            <a className="btn px-3 mt-auto mx-auto" href="/services">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                            <div className="service-icon btn-square">
                                                <i className="fa fa-brain fa-2x"></i>
                                            </div>
                                            <h5 className="mb-3">Predictive Analysis</h5>
                                            <p>Harness the power of AI to forecast trends, optimize decisions, and mitigate risks by analyzing 
                                                data patterns and predicting future outcomes.</p>
                                            <a className="btn px-3 mt-auto mx-auto" href="/services">Read More</a>
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

export default Service