import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class BooksRead extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  }

  componentDidMount() {
 
  }

  render() {
    return (
      <div className='BooksRead'>
        <div className='row'>
          <div className='col'>
            some books
          </div>
        </div>
      </div>
    );
  }
}

export default BooksRead;
