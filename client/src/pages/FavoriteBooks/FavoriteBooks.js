import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class FavoriteBooks extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className='FavoriteBooks'>
        <div className='row'>
          <div className='col'>
            FavoriteBooks
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteBooks;
