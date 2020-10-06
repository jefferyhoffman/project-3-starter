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
      <Jumbotron Jumbotron-fluid style={style.Jumbotron}>
  <Container>
    <h1 style={{ color: 'white' }}>Fluid jumbotron</h1>
    <p style={{ color: 'white' }}>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
    );
  }
}

export default HomePage;
