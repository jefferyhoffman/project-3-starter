import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="card-loginform">
        <div className="card-header-loginform"><h1>Sign in Drinkstation</h1><h4>And start exploring and creating!</h4></div>
        <div className="card-body">
          <form className='LoginForm' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="card-header-loginform">
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
                />  </div>
            </div>
            <div className="form-group">
              <div className="card-header-loginform">
                <label for="formGroupExampleInput2"><h4>Password:</h4></label>
              </div>
              <div className="card-body">
                <input
                  className='form-control2'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />  </div>
            </div>
            <button className='btn btn-info btn-lg' type='submit'>Sign In</button>
            <br/>
            <br/>
            <br/>
            <Link to='/register' onClick={this.toggleCollapse}><h3>New to Drinkstation! Click here to Sign up!</h3></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;

