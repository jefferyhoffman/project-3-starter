import React, { Component } from 'react';

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
      <div className="row">
      <div className="col-3"></div>
      <div className="col-6 LoginForm">
        <div className="card">
          <h2 className="mt-3 text-success">Login</h2>
          <div className="card-body">
            <form className='LoginForm' onSubmit={this.handleSubmit}>
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
      
              <button className='btn btn-success float-left' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-3"></div>
      </div>
    )
  }
}

export default LoginForm;

