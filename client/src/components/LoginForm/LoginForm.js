import React, { Component } from 'react';

import './login.css';

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
      <div id="login" className='LoginForm'>
        <div className='card'>
          <div className='card-body'>
            <div className='text-center'>
              <h3 className='white-text'>
                <i className='fas fa-user white-text'></i> Log In:
              </h3>
              <hr className='hr-light' />
              <form className='LoginForm' onSubmit={this.handleSubmit}>
                <div className='md-form'>
                  <i className='fas fa-envelope prefix white-text active'></i>
                  <input
                    className='form-control'
                    id='email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='form2'>{!this.state.email ? "Your email" : ""}</label>
                </div>

                <div className='md-form'>
                  <i className='fas fa-lock prefix white-text active'></i>
                  <input
                    className='form-control'
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='form4'>{!this.state.password ? "Your password" : ""}</label>
                </div>

                <button type='submit' className='btn btn-outline-light'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;

