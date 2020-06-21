import React, { useState } from 'react';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

const LoginForm =props=>{

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
    return (
      <div className='LoginForm'>
        <div className='card'>
          <div className='card-body'>
            <form className='LoginForm' onSubmit={e=>{props.onSubmit(email, password); e.preventDefault();}}>
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

              <button className='btn btn-primary' type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  
};

export default LoginForm;

