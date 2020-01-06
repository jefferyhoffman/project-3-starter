import React, { Component } from "react";
import {MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter, MDBNavLink } from 'mdbreact';

class FormPage extends Component {
  state = {
    email: '',
    password: '',
    passwordState: 'password',
    linkText: 'Show Password'
  };

  showPassword = event => {
    event.preventDefault();
    if (this.state.passwordState === "password") {
      this.setState({
        passwordState: "text",
        linkText: "Hide Password"
      })
    } else {this.setState({
      passwordState: "password",
      linkText: "Show Password"
    })}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(event.target.value)
  };

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;

    return (
      <MDBCard>
        <form onSubmit={this.handleSubmit}>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="dark-grey-text mb-5">
                <strong>Sign in</strong>
              </h3>
            </div>

            <MDBInput
              label="Your email"
              group
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Your password"
              group
              id="password"
              type={this.state.passwordState}
              name="password"
              value={password}
              onChange={this.handleInputChange}
              validate
              containerClass="mb-0"
            />
            <p className="font-small blue-text d-flex justify-content-end pb-3">
              <a className="blue-text ml-1" onClick={this.showPassword}>{this.state.linkText}</a>
            </p>
            {/* <p className="font-small blue-text d-flex justify-content-end pb-3">
              Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
            </p> */}
            <div className="text-center mb-3">
              <MDBBtn
                type="submit"
                gradient="purple"
                rounded
                className="btn-block z-depth-1a"
               >
                Sign in
              </MDBBtn>
            </div>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

              or Sign in with:
              </p>
            <div className="row my-3 d-flex justify-content-center">
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon fab icon="facebook-f" className=" red-text text-center"/>
              </MDBBtn>
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="mr-md-3 z-depth-1a"
              >
                <MDBIcon fab icon="twitter" className="pink-text" />
              </MDBBtn>
              <MDBBtn
                type="button"
                color="white"
                rounded
                className="z-depth-1a"
              >
                <MDBIcon fab icon="google-plus-g" className="purple-text" />
              </MDBBtn>

            </div>
          </MDBCardBody>
        </form>
        <MDBModalFooter className="mx-5 pt-3 mb-1">
          <p className="font-small grey-text d-flex justify-content-end">
            Not a member?
                <a href="/SignupPage" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
  );

  }
}





export default FormPage;