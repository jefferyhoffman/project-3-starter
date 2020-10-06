import React, { Component } from 'react';
import jumping from "../../images/jumping.jpeg";
import { Jumbotron, Container } from "react-bootstrap";



// const styles = {
//   Jumbotron: {
//       // backgroundImage: ,
//       width: "100%"
     
      
//   }
// }

class HomePage extends Component {
  render() {
    return ( 
      <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>


    );
  }
}

export default HomePage;
