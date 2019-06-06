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
      <div className='card-registerform'>
        <div className="card-header-registerform"><h1>Sign Up Drinkstation</h1><h4>Make this your drink destination!</h4></div>
          <div className="card-body">
            <form className='LoginForm' onSubmit={this.handleSubmit}>
              {/* <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div> */}
              <div className="form-group">
                <div className="card-header-registerform">
                  <label for="formGroupExampleInput"><h4>Email:</h4></label>
                </div>
                <div className="card-body">
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
              </div>
              {/* <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">a3b</span>
                </div> */}
              <div className="form-group">
                <div className="card-header-registerform">
                  <label for="formGroupExampleInput"><h4>Password:</h4></label>
                </div>
                <div className="card-body">
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
              </div>
              <button className='btn btn-primary' type='submit'>Register</button>
            </form>
          </div>
        </div>
    )
  }
}

export default RegisterForm;

