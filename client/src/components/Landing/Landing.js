import React, { Component } from "react";

import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div style={{ "border": "29px solid transparent", "backgroundImage": "url('http://res.cloudinary.com/cspaveljb/image/upload/v1499110969/cork_w2tt25.jpg')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center center", "borderImageSource": "url(\"http://res.cloudinary.com/cspaveljb/image/upload/v1499110958/corkborder_f8cm3g.png\")", "borderImageSlice": "29 29", "borderImageWidth": "29px 29px", "height": "100vh" }} className="Form">
        <div className="mask rgba-gradient align-items-center" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
              <h1 style={{ "marginTop": "10vh" }} className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Community Connect</h1>
              <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"
              />
              <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Already have an account?</h6>
              {/* replace / with login route */}
              <a href="/" id="makePost" variant="outline-warning" style={{ "color": "black" }} className="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Login</a>
            </div>
            <div className="col-md-6 col-xl-5 mb-4">
              <div style={{ "marginTop": "10vh" }} className="card wow fadeInRight size" data-wow-delay="0.3s">
                <div className="card-body">
                  <div className="text-center">
                    <h3 className="white-text">
                      <i style={{ "background": "transparent" }} className="fas fa-user white-text"></i> Register:
                  </h3>
                    <hr className="hr-light" />
                  </div>
                  <div className="md-form">
                    <i className="fas fa-user prefix white-text active"></i>
                    <input type="text" id="form3" className="white-text form-control" />
                    <label for="form3" className="active">Your name</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-envelope prefix white-text active"></i>
                    <input type="email" id="form2" className="white-text form-control" />
                    <label for="form2" className="active">Your email</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-lock prefix white-text active"></i>
                    <input type="password" id="form4" className="white-text form-control" />
                    <label for="form4">Your password</label>
                  </div>
                  <div className="text-center mt-4">
                    <button variant="secondary" size="lg">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
};



export default Landing;
