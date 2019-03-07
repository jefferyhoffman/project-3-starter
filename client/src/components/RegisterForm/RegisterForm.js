import React, { Component } from 'react';
import "./registerform.css"
import { FormErrors } from '../../components/Validation/FormErrors';

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 4;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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

        <h1 id="registerh1">Register Account</h1>
        <h3 id="registerh3">Get Started on Your Journey!</h3>
        
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

          <div className="panel panel-default" id="formerrors">
            <FormErrors formErrors={this.state.formErrors} />
          </div>

          <button className='registerbutton' type='submit' disabled={!this.state.formValid}>Register</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm;

