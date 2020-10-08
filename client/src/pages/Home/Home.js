import React, { Component } from 'react';

import logo from './logo.svg';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/pages/Home.js</code> and save to reload.
            </p>
            {/* <a
              className='App-link'
              href='https://reactjs.org'
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
</div>
            </div>
          </div>
        </div>
    );
  }
}

export default HomePage;
