import React, { Component } from 'react';
import logo from './mylogo.png';

const styles = {
  Logo:{
    marginTop:"30px",
    height:"60vh"
  },
}


class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
          
  <div className="container">
    <h1>Welcome to</h1>
  <img style={styles.Logo} src={logo} alt='logo' />
    <h1 className="lead">Nest Egg</h1>
  </div>

          
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
