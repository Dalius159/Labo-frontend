import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="container-fluid pt-5 bg-primary hero-header mb-5">
            <div className="container pt-5">
                <div className="row g-5 pt-5">
                    <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                        <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">AI.Tech</div>
                        <h1 className="display-4 text-white mb-4 animated slideInRight">Artificial Intelligence for Your Business</h1>
                        <p className="text-white mb-4 animated slideInRight">Artificial Intelligence (AI) enhances business efficiency, decision-making, 
                            and customer experience. It automates tasks, analyzes data, and personalizes interactions, boosting productivity and 
                            profitability. AI applications like chatbots, predictive analytics, and personalized marketing help businesses stay 
                            competitive and drive growth. Embrace AI to optimize operations and gain a market edge.</p>
                        <a href="/about" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">Read More</a>
                        <a href="/contact" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-lg-end">
                        <img className="img-fluid" src="/src/assets/img/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero