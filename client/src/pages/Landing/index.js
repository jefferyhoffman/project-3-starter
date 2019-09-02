import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";

class LandingPage extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="row my-5">
          <div className="col-12 my-5">
            <div className="row mx-auto bg-dark text-light p-5">
              <div className="col-lg-6 text-center">
                <h5>Welcome to</h5>
                <h3>Road Trip DJ</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ea quo
                  beatae laboriosam dicta ipsam harum velit labore facilis molestias,
                  laudantium quae. Eligendi voluptates, itaque exercitationem officiis
                  distinctio eos dolorem.
                </p>
                <p>
                  Recusandae ea iste quis sequi obcaecati deserunt quod adipisci
                  assumenda. Voluptate animi dolorum voluptatum quas recusandae vel rerum
                  in. Distinctio itaque quasi nulla consequuntur eius maxime officia
                  mollitia et a?
                </p>
              </div>
              <div className="col-lg-6 text-center my-auto">
                <h3>Login Form</h3>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
