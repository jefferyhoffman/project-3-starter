import React, { Component } from "react";
import Form from "../../components/Form";

// import logo from './logo.svg';

class LandingPage extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <h2>I am the Landing Page</h2>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
