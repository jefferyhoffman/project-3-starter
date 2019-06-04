import React, { Component } from 'react';

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
      <div className="col-3"></div>
      <div className='col-6 RegisterForm'>
        <div className='card'>
          <div className='card-body'>
          <h2 className="card-title text-success">Create an Account with GreenSpace</h2>
          <br />
          <form>
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Phone Number" />
              </div>
            </div>
            <br />
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

              <button className='btn btn-success float-left' type='submit'>Register</button>
            </form>
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

