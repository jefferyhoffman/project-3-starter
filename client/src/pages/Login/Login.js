/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = props => {
  const userContext = useContext(AuthContext);

  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        userContext.onLogin(user, token);
        setError('');
        setRedirectToReferrer(true);
      })
      .catch(err => {
        let message;
        console.log(err);
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

        setError(message);
      });
  };

  const { from } = props.location.state || { from: { pathname: '/secret' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div className='Login'>
      <div className='row'>
        <div className='col'>
          <h1>Login</h1>
        </div>
      </div>
      {error &&
        <div className='row'>
          <div className='col'>
            <div className='alert alert-danger mb-3' role='alert'>
              {error}
            </div>
          </div>
        </div>}
      <div className='row'>
        <div className='col'>
          <LoginForm onSubmit={handleSubmit} />
          <div className='mt-3'>Don't have an account? <Link to='/register'>Click here to register.</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
