import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class WishList extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className='WishList'>
        <div className='row'>
          <div className='col'>
          WishList
          </div>
        </div>
      </div>
    );
  }
}

export default WishList;
