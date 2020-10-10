import React, { Component } from 'react';

import Octicon, { Mail, Key, Location, Person, DeviceMobile } from '@githubprimer/octicons-react';

class RegistrationForm extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    first: '',
    last: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',


  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password, passwordConfirm, first, last, address, city, state, zip, country, phone } = this.state;

    this.props.onSubmit(email, password, passwordConfirm, first, last, address, city, state, zip, country, phone);
    event.preventDefault();
  }

  render() {
    const { email, password, passwordConfirm, first, last, address, city, state, zip, country, phone } = this.state;

    return (
      <div className='LoginForm'>
        {/* <div className='card'> */}
          <div className='card-body'>
            <form onSubmit={this.handleSubmit}>
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
                  unique= 'true'
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

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Person} /></span>
                </div>
                <input
                  className='form-control'
                  id='first'
                  type='first'
                  name='first'
                  placeholder='First name'
                  value={first}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Person} /></span>
                </div>
                <input
                  className='form-control'
                  id='last'
                  type='last'
                  name='last'
                  placeholder='Last name'
                  value={last}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Location} /></span>
                </div>
                <input
                  className='form-control'
                  id='address'
                  type='address'
                  name='address'
                  placeholder='Address'
                  value={address}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Location} /></span>
                </div>
                <input
                  className='form-control'
                  id='city'
                  type='city'
                  name='city'
                  placeholder='City'
                  value={city}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Location} /></span>
                </div>
                <input
                  className='form-control'
                  id='state'
                  type='state'
                  name='state'
                  placeholder='State'
                  value={state}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Location} /></span>
                </div>
                <input
                  className='form-control'
                  id='zip'
                  type='zip'
                  name='zip'
                  placeholder='Zip'
                  value={zip}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Location} /></span>
                </div>
                <input
                  className='form-control'
                  id='country'
                  type='country'
                  name='country'
                  placeholder='Country'
                  value={country}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={DeviceMobile} /></span>
                </div>
                <input
                  className='form-control'
                  id='phone'
                  type='phone'
                  name='phone'
                  placeholder='Phone'
                  value={phone}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className='btn btn-primary' type='submit'>Register Now!</button>
            </form>
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default RegistrationForm;
