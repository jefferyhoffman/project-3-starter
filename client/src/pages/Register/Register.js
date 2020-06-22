import React, { useState } from 'react';
import {Redirect} from 'react-router-dom'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';

const Register = () => {
  const [error, setError] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const handleSubmit = (email, password, confirm) => {
    if (password !== confirm) {
      return this.setState({ error: 'Passwords do not match.' });
    }

    API.Users.create(email, password)
      .then(response => response.data)
      .then(user =>{
        setRedirectToReferrer(true)
        console.log(user)})
      .catch(err => setError(err));
  };
  if (redirectToReferrer) {
    return <Redirect to="/login" />;
  }
  return (
    <div className='Register'>
      <div className='row'>
        <div className='col'>
          <h1>Register</h1>
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
          <RegistrationForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Register;
