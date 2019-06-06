import React, { Component } from 'react';
import "./register.css";


class Register extends Component {
  state = {
    email: '',
    password: '',
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
      <div className="container">
        <div className='RegisterFormT'>
          <div className='card'>
            <div className='card-body'>
              <h1>Register</h1>
              <form className='RegisterForm' onSubmit={this.handleSubmit}>
                <div className='input-group mb-3'>
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    className='form-control'
                    id='email'
                    type='email'
                    name='email'
                    placeholder='email@koscowix.com'
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className='input-group mb-3'>
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

                <button className='btn btn-secondary sub-button' type='submit'>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;