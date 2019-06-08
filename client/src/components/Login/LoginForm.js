import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import AuthContext from '../../../contexts/AuthContext';

class LoginForm extends Component {
  static contextType = AuthContext;
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
      <div className='LoginForm'>
        <div className='card'>
          <div className='card-body'>
            <form className='LoginForm' onSubmit={this.handleSubmit}>

              <div className='input-group mb-3'></div>
                <div className="input-group-prepend"></div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
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
              <button className='btn btn-primary' type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;