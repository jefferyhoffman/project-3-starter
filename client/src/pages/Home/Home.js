import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap'
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
<<<<<<< HEAD
      <Jumbotron Jumbotron-fluid style={style.Jumbotron}>
  <Container>
    <h1 style={{ color: 'white' }}>Fluid jumbotron</h1>
    <p style={{ color: 'white' }}>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
=======
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
>>>>>>> b34bc7179cb4d48457ca16a355bcc7326bec0bdf
    );
  }
}

export default HomePage;