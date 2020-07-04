import React, { Component } from 'react';
import './RegistrationForm.css'

class RegistrationForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password, passwordConfirm } = this.state;

    this.props.onSubmit(email, password, passwordConfirm);
    event.preventDefault();
  }

  render() {
    const { email, password, passwordConfirm } = this.state;

    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column"></div>
          <div className="column">
            <div className="card">
              <div className="card-content">
            <form onSubmit={this.handleSubmit}>
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
                  <div className="field">
                  <div className="control">
                      <input
                        className="input"
                        id="password-confirm"
                        type="password"
                        name="passwordConfirm"
                        placeholder="Re-enter Password 🔐"
                        value={passwordConfirm}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <button className="button" id="signupBtn" type="submit">
                    <strong>Signup</strong>
                  </button>

              
            </form>
          </div>
        </div>
      </div>
      <div className="column"></div>
      </div>
      </div>

    )
  }
}

export default RegistrationForm;
