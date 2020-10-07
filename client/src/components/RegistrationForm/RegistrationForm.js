import React, { Component } from 'react';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

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
      <div classNameName='LoginForm'>
        {/* <div classNameName='card'>
          <div classNameName='card-body'> */}
            <form onSubmit={this.handleSubmit}>

              <div className="field">
                <p className="control has-icons-left has-icons-right">
                <Octicon icon={Mail} />
                  <input 
                  className="input" 
                  type="email" 
                  name="email" 
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                <Octicon icon={Key} />
                  <input 
                  className="input" 
                  type="password" 
                  name="password"
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                <Octicon icon={Key} />
                  <input 
                  className="input" 
                  type="password" 
                  name='passwordConfirm'
                  placeholder='password (again)'
                  value={passwordConfirm}
                  onChange={this.handleInputChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <button classNameName='button is-primary' type='submit'>Register Now!</button>
            </form>
          {/* </div>
        </div> */}
      </div>
    )
  }
}

export default RegistrationForm;

{/* <div classNameName='input-group mb-3'>
                <div classNameName="input-group-prepend">
                  <span classNameName="input-group-text"><Octicon icon={Mail} /></span>
                </div>
                <input
                  classNameName='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div classNameName='input-group mb-3'>
                <div classNameName="input-group-prepend">
                  <span classNameName="input-group-text"><Octicon icon={Key} /></span>
                </div>
                <input
                  classNameName='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>

              <div classNameName='input-group mb-3'>
                <div classNameName="input-group-prepend">
                  <span classNameName="input-group-text"><Octicon icon={Key} /></span>
                </div>
                <input
                  classNameName='form-control'
                  id='password-confirm'
                  type='password'
                  name='passwordConfirm'
                  placeholder='password (again)'
                  value={passwordConfirm}
                  onChange={this.handleInputChange}
                />
              </div> */}