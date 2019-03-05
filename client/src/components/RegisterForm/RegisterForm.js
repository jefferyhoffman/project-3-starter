import React, { Component } from 'react';
import "./registerform.css"

class RegisterForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='RegisterForm'>

        <h1>Register Account</h1>
        <h3>Get Started on Your Journey!</h3>
        
        <form onSubmit={this.handleSubmit}>
          <div className='input-group mb-3' id="registeremail">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              className='form-control'
              id='email'
              type='email'
              name='email'
              placeholder='email@provider.com'
              value={email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className='input-group mb-3' id="registerpass">
            <div className="input-group-prepend">
              <span className="input-group-text">a3b</span>
            </div>
            <input
              className='form-control'
              id='password'
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={this.handleInputChange}
            />
          </div>

          <button className='registerbutton' type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm;

