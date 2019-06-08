import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "../../components/Login/Login.css";

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
      <div className="container">
      <div className='LoginFormT'>
        <div className='card'>
          <div className='card-body'>
            <h1>Login</h1>
            <form className='LoginForm' onSubmit={this.handleSubmit}>

              <div className='input-group mb-3'></div>
                <div className="input-group-prepend"></div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@pkoscowix.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
             

              <div className='input-group mb-3'></div>
                <div className="input-group-prepend"></div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
             
             <p>Don't have an account?<br /> <Link to="/register">Register </Link>to create a profile account.</p>
              <button className='btn btn-secondary sub-button' type='submit'>Login</button>
              {/* <button className='btn btn-primary lbutton' type='submit'>Login</button>
              <Link to="/register" onClick={this.toggleCollapse}>
              <button className='btn btn-primary lbutton' type='submit'>Create a new account</button>
              </Link> */}
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default LoginForm;
            
              // <p>Don't have an account?<br /> <Link to="/register">Register </Link>to create a profile account.</p>
              // <button className='btn btn-primary' type='submit'>Login</button>
