import React from 'react'

const PageHeader = () => {
  return (
    <div>
        {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">Our Blog</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item" aria-current="page">Blog</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}
    </div>
  )
}

export default PageHeader