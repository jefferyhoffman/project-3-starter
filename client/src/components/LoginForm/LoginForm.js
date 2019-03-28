import React, { Component } from 'react';
import "./loginform.css"

class LoginForm extends Component {
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
      <div className='LoginForm'>
        
          <h1 id="loginh1">Login</h1>
          <h3 id="loginh3">View and Manage your Trips!</h3>
        
        <form onSubmit={this.handleSubmit}>
          <div className='input-group mb-3' id="loginemail">
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

          <div className='input-group mb-3' id="loginpass">
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

          <button className='loginbutton' type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;

