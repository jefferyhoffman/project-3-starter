import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import "./Landing.css";

class Landing extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: "",
    registered: false
  };

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message =
              "Sorry, that email/password combination is not valid. Please try again.";
            break;
          case 500:
            message = "Server error. Please try again later.";
            break;
          default:
            message = "Unknown error.";
        }

        this.setState({ error: message });
      });
  };

  handleRegistrationSubmit = (email, password) => {
    API.Users.create(email, password)
    .then( res =>{
      this.setState({registered: true})
    })
    .catch(err =>{
      if (err.response.status === 404){
        this.setState({error: 'Sorry, that email/password combination is not valid.  Please try again.'})
      }
    })

  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to='/events' />;
    }

    return (
      <div
        style={{
          border: "29px solid transparent",
          backgroundImage:
            "url('https://freebie.photography/concept/network_node.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderImageSource:
            'url("http://res.cloudinary.com/cspaveljb/image/upload/v1499110958/corkborder_f8cm3g.png")',
          borderImageSlice: "29 29",
          borderImageWidth: "29px 29px",
          height: "100vh"
        }}
        className="Form"
      >
        <div className="mask rgba-gradient align-items-center" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 white-text text-center text-md-left">
              
                <h1
                  id="cc"
                  style={{ marginTop: "10vh" }}
                  className="h1-responsive font-weight-bold wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  #GetPosted
                </h1>{" "}
              
              <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
              <LoginForm onSubmit={this.handleSubmit} />
           
            </div>

            {this.state.error && (
              <div className="row">
                <div style = {{"width": '200px'}}>
                  <div className="alert alert-danger mb-3" role="alert">
                    {this.state.error}
                  </div>
                </div>
              </div>
            )}

            <div id="reg" className="col-md-6">
              <RegistrationForm onSubmit = {this.handleRegistrationSubmit} registered = {this.state.registered}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
