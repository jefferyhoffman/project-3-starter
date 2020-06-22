/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

const RegistrationForm =props=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <div className='LoginForm'>
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={e=>{
            props.onSubmit(email, password, passwordConfirm); e.preventDefault();
          }}>
            <div className='input-group mb-3'>
              <div className="input-group-prepend">
                <span className="input-group-text"><Octicon icon={Mail} /></span>
              </div>
              <input
                className='form-control'
                id='email'
                type='email'
                name='email'
                placeholder='email@provider.com'
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>

            <div className='input-group mb-3'>
              <div className="input-group-prepend">
                <span className="input-group-text"><Octicon icon={Key} /></span>
              </div>
              <input
                className='form-control'
                id='password'
                type='password'
                name='password'
                placeholder='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>

            <div className='input-group mb-3'>
              <div className="input-group-prepend">
                <span className="input-group-text"><Octicon icon={Key} /></span>
              </div>
              <input
                className='form-control'
                id='password-confirm'
                type='password'
                name='passwordConfirm'
                placeholder='password (again)'
                value={passwordConfirm}
                onChange={e=>setPasswordConfirm(e.target.value)}
              />
            </div>

            <button className='btn btn-primary' type='submit'>Register Now!</button>
          </form>
        </div>
      </div>
    </div>
  );

};

export default RegistrationForm;
