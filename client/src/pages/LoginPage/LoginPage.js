import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import FormPage from "../../components/SignInForm";
import "./LoginPage.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

class SignIn extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  };

  handleSubmit = (email, password) => {
    console.log(email, password);
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

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/UserDash" }
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div id="loginPageColor">
        <React.Fragment>
          <br />
          <MDBContainer>
            <MDBRow>
              <MDBCol className="white-text">
                <br />
                <h3 className="loremText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis earum voluptas praesentium quod dolor adipisci! Ullam
                  autem sapiente aliquid! Maiores a itaque in odio mollitia
                  perspiciatis corporis soluta cupiditate esse!
                </h3>
              </MDBCol>
              <MDBCol>
                <MDBCol>
                  {this.state.error && (
                    <div className="row">
                      <div className="col">
                        <div className="alert alert-danger mb-3" role="alert">
                          {this.state.error}
                        </div>
                      </div>
                    </div>
                  )}
                  <FormPage onSubmit={this.handleSubmit} />
                </MDBCol>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </React.Fragment>
      </div>
    );
  }
}

export default SignIn;
