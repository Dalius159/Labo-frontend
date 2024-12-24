import React from 'react'
import '../../../public/assets/css/GroupMemberList.css'

const MemberList = ({service_name}) => {
  return (
    <div>
        <div className="container-fluid services py-5 my-5">
        <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth:'600px'}}>
            <h5 className="text-primary">Our Services</h5>
            <h1>{service_name}</h1>
        </div>
        <div className="container">
            <div className="row bootstrap snippets bootdeys"> 
                <div className="col-md-9 col-sm-7"> 
                    <h2>Members</h2> 
                </div> 
                <div className="col-md-3 col-sm-5"> 
                    <form method="get" role="form" className="search-form-full"> 
                        <div className="form-group"> 
                            <input type="text" className="form-control" name="s" id="search-input" placeholder="Search..." /> 
                            <i className="entypo-search"></i> 
                        </div> 
                    </form> 
                </div> 
            </div>
            <div className="member-entry"> 
                <a href="#" className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="img-rounded" /> 
                    <i className="fab fa-forward"></i> 
                </a> 
                <div className="member-details"> 
                    <h4> <a href="#">Johnnie Linton</a> </h4> 
                    <div className="row info-list"> 
                        <div className="col-sm-4"> 
                            <i className="fas fa-briefcase"></i>
                            Co-Founder at <a href="#">Complete Tech</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-twitter"></i> 
                            <a href="#">@johnnie</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-facebook"></i> 
                            <a href="#">fb.me/johnnie</a> 
                        </div> 
                        <div className="clear"></div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-location"></i> 
                            <a href="#">Prishtina</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fa fa-envelope"></i> 
                            <a href="#">john@gmail.com</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-linkedin"></i> 
                            <a href="#">johnkennedy</a> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <div className="member-entry"> 
                <a href="#" className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="img-rounded" /> 
                    <i className="fab fa-forward"></i> 
                </a> 
                <div className="member-details"> 
                    <h4> <a href="#">Johnnie Linton</a> </h4> 
                    <div className="row info-list"> 
                        <div className="col-sm-4"> 
                            <i className="fas fa-briefcase"></i>
                            Co-Founder at <a href="#">Complete Tech</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-twitter"></i> 
                            <a href="#">@johnnie</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-facebook"></i> 
                            <a href="#">fb.me/johnnie</a> 
                        </div> 
                        <div className="clear"></div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-location"></i> 
                            <a href="#">Prishtina</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fa fa-envelope"></i> 
                            <a href="#">john@gmail.com</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-linkedin"></i> 
                            <a href="#">johnkennedy</a> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <div className="member-entry"> 
                <a href="#" className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="img-rounded" /> 
                    <i className="fab fa-forward"></i> 
                </a> 
                <div className="member-details"> 
                    <h4> <a href="#">Johnnie Linton</a> </h4> 
                    <div className="row info-list"> 
                        <div className="col-sm-4"> 
                            <i className="fas fa-briefcase"></i>
                            Co-Founder at <a href="#">Complete Tech</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-twitter"></i> 
                            <a href="#">@johnnie</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-facebook"></i> 
                            <a href="#">fb.me/johnnie</a> 
                        </div> 
                        <div className="clear"></div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-location"></i> 
                            <a href="#">Prishtina</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fa fa-envelope"></i> 
                            <a href="#">john@gmail.com</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-linkedin"></i> 
                            <a href="#">johnkennedy</a> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <div className="member-entry"> 
                <a href="#" className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="img-rounded" /> 
                    <i className="fab fa-forward"></i> 
                </a> 
                <div className="member-details"> 
                    <h4> <a href="#">Johnnie Linton</a> </h4> 
                    <div className="row info-list"> 
                        <div className="col-sm-4"> 
                            <i className="fas fa-briefcase"></i>
                            Co-Founder at <a href="#">Complete Tech</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-twitter"></i> 
                            <a href="#">@johnnie</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-facebook"></i> 
                            <a href="#">fb.me/johnnie</a> 
                        </div> 
                        <div className="clear"></div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-location"></i> 
                            <a href="#">Prishtina</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fa fa-envelope"></i> 
                            <a href="#">john@gmail.com</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-linkedin"></i> 
                            <a href="#">johnkennedy</a> 
                        </div> 
                    </div> 
                </div> 
            </div>
            <div className="member-entry"> 
                <a href="#" className="member-img"> 
                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="img-rounded" /> 
                    <i className="fab fa-forward"></i> 
                </a> 
                <div className="member-details"> 
                    <h4> <a href="#">Johnnie Linton</a> </h4> 
                    <div className="row info-list"> 
                        <div className="col-sm-4"> 
                            <i className="fas fa-briefcase"></i>
                            Co-Founder at <a href="#">Complete Tech</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-twitter"></i> 
                            <a href="#">@johnnie</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-facebook"></i> 
                            <a href="#">fb.me/johnnie</a> 
                        </div> 
                        <div className="clear"></div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-location"></i> 
                            <a href="#">Prishtina</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fa fa-envelope"></i> 
                            <a href="#">john@gmail.com</a> 
                        </div> 
                        <div className="col-sm-4"> 
                            <i className="fab fa-linkedin"></i> 
                            <a href="#">johnkennedy</a> 
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

export default MemberList