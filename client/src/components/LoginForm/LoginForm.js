import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import Octicon, { Mail, Key } from '@githubprimer/octicons-react';
import "../LoginForm/LoginForm.css"

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

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

    console.log('email password', email, password);

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    
    return (
    <div>
      {/* <Particles
        params={{
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10
            },
            url: 'path/to/svg.svg'
          }
        }} /> */}
      <div className='LoginForm'>
        <div className='card bg-secondary'>
        {/* <div className='card'> */}
          <div className='card-body bg-secondary'>
            <form className='LoginForm-secondary' onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text bg-dark text-light"><Octicon icon={Mail} /></span>
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
                  <span className="input-group-text bg-dark text-light"><Octicon icon={Key} /></span>
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
              <button className='btn btn-light' type='submit'>Login</button>
              {/* <Particles
              params={{
              polygon: {
              enable: true,

              width: '100%',
              height: '200%',
              type: 'outside',
              move: {
              radius: 10
            }, */}
            {/* url: 'path/to/svg.svg'
          }
        }} /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LoginForm;

