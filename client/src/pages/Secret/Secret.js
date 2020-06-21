import React, {useContext, useState, useEffect} from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

const Secret =props=>{
  const UserContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [secrets, setSecrets] = useState("")
  useEffect(()=>{
    const authToken = UserContext.authToken
    API.Secrets.getAll(authToken)
      .then(response => response.data)
      .then(secrets => setSecrets(secrets))
      .catch(err => {
        if (err.response.status === 401) {
          return setError("Unauthorized. Please login.");
        }

        console.log(err);
      })
      .finally(() => setIsLoading(false));
  },[UserContext.authToken])

    return (
      <div className='Secret'>
        <div className='row'>
          <div className='col'>
            {isLoading
              ? <div className='alert alert-success'>Loading...</div>
              : error
                ? <div className='alert alert-danger'>{error}</div>
                : <div>
                  <p>Shh, the secret is...</p>
                  <p><em>{secrets[0].message}</em></p>
                </div>}
          </div>
        </div>
      </div>
    );
  
}

export default Secret;
