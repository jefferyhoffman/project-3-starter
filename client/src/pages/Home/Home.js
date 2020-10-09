import React, { Component } from 'react';
import logo from './birdLogo.png';

const styles = {
  Logo:{
    marginTop:"100px",
    height:"45vh"
  },
  Name:{
    fontSize:"70px",
    fontFamily: "Cinzel Decorative"
  },
  Welcome:{
    fontSize:"70px"
  }
}


class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
          
  <div className="container">
    {/* <h1 className="animate__animated animate__fadeIn animate__delay-2s">Welcome to</h1> */}
  <img className="animate__animated animate__fadeIn animate__delay-1s" style={styles.Logo} src={logo} alt='logo' />
    <h1 style={styles.Name} className="lead animate__animated animate__fadeIn animate__delay-1s">Nest Egg</h1>
  </div>

          
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
