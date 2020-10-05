import React, { Component } from 'react';

// import Hero from '../../components/Hero/Hero'
import { Row, Col, Container, Image, Jumbotron } from 'react-bootstrap'
import clapping from '../../pages/Images/clapping.jpg'
import "../Home/home.css"
import Hero from '../../components/Hero/Hero'
import HeroButton from '../../components/Button/Button'



class HomePage extends Component {

  render() {
    return (
      

      <Jumbotron>
        <Image src={clapping} fluid/>
        </Jumbotron>

      <div>
      <Hero/>
        <HeroButton/>
    
    <hr className = "solid"></hr>
      </div>

     
    
    );
  }
}
export default HomePage;
