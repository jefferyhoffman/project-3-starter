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

    const { user } = this.context
    if(user) {
      return <Redirect to={"UserDash"}/>
    }

    return (
      <div id="loginPageColor">
        <React.Fragment>
          <br />
          <MDBContainer>
            <MDBRow>
              <MDBCol className="white-text">
                <br />
                <h3 className="loremText">Welcome the most advanced and free buisness card design studio on the internet.  Explore our intricately designed templates and masterfully crafted UI. Built by a small team of four fullstack web dev students.</h3>
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
