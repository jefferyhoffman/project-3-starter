import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import FlashMessage from 'react-flash-message';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import StatusContext from '../../contexts/StatusContext';
import LoginForm from '../../components/LoginForm/LoginForm';

class Login extends Component {
  // static contextType = AuthContext;
  // static contextType = StatusContext;

  state = {
    redirectToReferrer: false
  }

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.props.auth.onLogin(user, token);
        this.props.status.onSuccess("You've been successfully logged in!");
        this.setState({ redirectToReferrer: true});
      })
      .catch(err => {
        let message;
        console.log(err)

       switch (err.response.status) {
         case 401:
            message = 'Sorry, that email/password combination is not valid. Please try again.';
            break;
          case 500:
            message = 'Server error. Please try again later.';
            break;
          default:
            message = 'Unknown error.';
        }

       this.props.status.onError(message);
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>Login</h1>
            </div>
          </div>

          {this.props.status.error &&
            <div className='row'>
              <div className='col'>
                <FlashMessage>
                  <div className='alert alert-danger mb-3' role='alert'>
                    {this.props.status.error}
                  </div>
                </FlashMessage>
              </div>
            </div>}

          {this.props.status.success &&
            <div className='row'>
              <div className='col'>
                <FlashMessage>
                  <div className='alert alert-success mb-3' role='alert'>
                    {this.props.status.success}
                  </div>
                </FlashMessage>
              </div>
            </div>}

          <div className='row'>
            <div className='col'>
              <LoginForm onSubmit={this.handleSubmit} />
              <div className='mt-3'>Don't have an account? <Link to='/register'>Click here to register.</Link></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
