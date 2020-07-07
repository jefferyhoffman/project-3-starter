import React, { Component } from 'react';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
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
    const { firstName, lastName, userName, email, password, passwordConfirm } = this.state;

    this.props.onSubmit(firstName, lastName, userName, email, password, passwordConfirm);
    event.preventDefault();
  }

  render() {
    const { firstName, lastName, userName, email, password, passwordConfirm } = this.state;

    return (
      <div className='LoginForm'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={this.handleSubmit}>
            <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Mail} /></span>
                </div>
                <input
                  className='form-control'
                  id='first-name'
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={firstName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Mail} /></span>
                </div>
                <input
                  className='form-control'
                  id='last-name'
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Mail} /></span>
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

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Key} /></span>
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

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Key} /></span>
                </div>
                <input
                  className='form-control'
                  id='password-confirm'
                  type='password'
                  name='passwordConfirm'
                  placeholder='password (again)'
                  value={passwordConfirm}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className='btn btn-primary' type='submit'>Register Now!</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm;
