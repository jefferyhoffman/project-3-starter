import React, { Component } from 'react';
// import Hero from '../../components/Hero/Hero'
import { Row, Col, Container, Image, Jumbotron } from 'react-bootstrap'
import clapping from '../../pages/Images/clapping.jpg'
import "../Home/home.css"
class HomePage extends Component {

  render() {
    return (
      
      <Jumbotron>
        <Image src={clapping} fluid/>
        </Jumbotron>
     
    
    );
  }
}
export default HomePage;
