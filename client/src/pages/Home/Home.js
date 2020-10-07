import React, { Component } from 'react';
import logo from './logo.svg'
import Jumping from '../../images/jumping.jpg'

const style = {
  Jumbotron: {
    backgroundSize: 'cover',
    height: '50vH',
    backgroundRepeat: 'no-repeat, center',
    backgroundImage: `url(${ Jumping })`,
    width: '100%'
  }
}


class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='columns'>
          <div className='column'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/pages/Home.js</code> and save to reload.
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

export default HomePage;