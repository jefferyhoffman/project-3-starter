import React, { Component } from 'react';

import logo from './logo.svg';

class SchedulingPage extends Component {
  render() {
    return (
      <div className='Scheduling'>
        <div className='row'>
          <div className='col'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/pages/Scheduling.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SchedulingPage;
