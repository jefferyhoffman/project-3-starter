import React, { Component } from 'react';
import jumping from "../../images/jumping.jpeg";
import logo from './logo.svg';
import menu from "../Menu/Menu";



// const styles = {
//   Jumbotron: {
//       // backgroundImage: ,
//       width: "100%"
     
      
//   }
// }

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