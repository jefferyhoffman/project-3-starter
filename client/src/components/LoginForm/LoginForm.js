import React, { Component } from "react";
import "./LoginForm.css";
// import Octicon, { Mail, Key } from "@githubprimer/octicons-react";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
        <div className="columns">
          
          <div className="column is-4 is-offset-4">
            <div className="card">
              <div className="card-content">
                <p className="title">Login</p>
                <form className="LoginForm" onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Email 📧"
                        value={email}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter Password 🔐"
                        value={password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <button className="button" id="loginBtn" type="submit">
                    <strong>Login</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default LoginForm;
