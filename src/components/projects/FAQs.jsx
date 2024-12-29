import React from 'react'

const FAQs = () => {
  return (
    <div>
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
                    <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Popular FAQs</div>
                    <h1 className="mb-4">Frequently Asked Questions</h1>
                </div>
                <div className="row">
                <div className="col-lg-6">
                        <div className="accordion" id="accordionFAQ1">
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.1s">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        What is AI?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionFAQ1">
                                    <div className="accordion-body">
                                        AI refers to the simulation of human intelligence in machines that are programmed to think and learn.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.2s">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How does machine learning work? 
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionFAQ1">
                                    <div className="accordion-body">
                                        Machine learning uses algorithms to identify patterns in data and improve automatically through experience.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.3s">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is robotic automation?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionFAQ1">
                                    <div className="accordion-body">
                                        Robotic automation uses robots or software to automate repetitive tasks, improving efficiency and reducing human error.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.4s">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        How can AI benefit my business? 
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionFAQ1">
                                    <div className="accordion-body">
                                        AI can enhance decision-making, optimize operations, and improve customer experiences, leading to increased efficiency and growth.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion" id="accordionFAQ2">
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.5s">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        What industries use AI?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionFAQ2">
                                    <div className="accordion-body">
                                        AI is widely used in industries such as healthcare, finance, manufacturing, and retail for tasks like data analysis, automation, and decision support.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.6s">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        What is predictive analysis?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionFAQ2">
                                    <div className="accordion-body">
                                        Predictive analysis uses historical data and machine learning to forecast future outcomes and trends.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.7s">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        How secure is AI?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                                    data-bs-parent="#accordionFAQ2">
                                    <div className="accordion-body">
                                        AI security involves protecting systems from malicious use and ensuring that AI decisions are transparent and unbiased.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item wow fadeIn" data-wow-delay="0.8s">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        Is AI expensive to implement? 
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                                    data-bs-parent="#accordionFAQ2">
                                    <div className="accordion-body">
                                        The cost of AI implementation varies, but businesses can start with affordable solutions and scale as needed.
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

export default FAQs