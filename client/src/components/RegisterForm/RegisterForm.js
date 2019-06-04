import React, { Component } from 'react';
import '../RegisterForm/style.css';

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
      <div className="row">
       <div className="col-sm-3"></div>
       <div className='col-sm-6 RegisterForm'>
        <div className='card'>
          <div className='card-body'>
          <h2 className="card-title text-success">Create an Account with GreenScapes</h2>
          <br />
          <form className='LoginForm' onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <input 
                className="form-control"
                id='firstName'
                type='text'
                name='firstname'
                placeholder="First name"
                // value={firstName}
                 onChange={this.handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <input 
                  className="form-control mediaForm"
                  id='lastName'
                  type='text'
                  name='lastname'
                  placeholder="Last name"
                  // value={lastName}
                  onChange={this.handleInputChange}
                  />
                </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-6">
                <input 
                  className="form-control"
                  id='address'
                  type='text'
                  name='address'
                  placeholder="Address"
                  // value={address}
                  onChange={this.handleInputChange}
                  />
              </div>
              <div className="col-sm-6">
                <input 
                  className="form-control mediaForm"
                  id='phoneNumber'
                  type='text'
                  name='phonenumber'
                  placeholder="Phone Number"
                  // value={phoneNumber}
                  onChange={this.handleInputChange}
                  />
              </div>
            </div>
            <br />
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Email</span>
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
                  <span className="input-group-text">Password</span>
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
              <button className='btn btn-success float-left' type='submit'>Register</button>
          </form>
        </div>
      </div>
        <div className="col-3"></div>
      </div>
    </div>
    )
  }
}

export default RegisterForm;

