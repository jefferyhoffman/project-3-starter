import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../LoginForm/loginform.css';

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
        <div className="card-header-loginform"><h2>Login</h2><h4><hr></hr>And start exploring and creating!</h4></div>
        <div className="card-body">
          <form className='LoginForm' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="card-header-loginform">
                {/* <label for="formGroupExampleInput"><h4>Email:</h4></label> */}
              </div>
              <div  className="card-body" >
                <input
                  className='form-control1'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={this.handleInputChange}
                /> </div>
            </div>
            <div className="form-group">
              <div className="card-header-loginform">
                {/* <label for="formGroupExampleInput2"><h4>Password:</h4></label> */}
              </div>
              <div className="card-body">
                <input
                  className='form-control2'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={this.handleInputChange}
                /></div>
            </div>
            <button className='btn btn-primary btn-lg ' type='submit'>Sign In</button>
            <br/>
            <br/>
            <Link to='/register' onClick={this.toggleCollapse}> Dont Have an Account? Sign Up </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;

