import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="container-fluid pt-5 bg-primary hero-header">
            <div className="container pt-5">
                <div className="row g-5 pt-5">
                    <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                        <h1 className="display-4 text-white mb-4 animated slideInRight">Our Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Our Services</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-lg-6 align-self-end text-center text-lg-end">
                        <img className="img-fluid" src="/src/assets/img/hero-img.png" alt="" style={{maxHeight: '300px'}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero