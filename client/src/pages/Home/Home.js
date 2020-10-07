import React, { Component } from "react";

// import Hero from '../../components/Hero/Hero'
import { Row, Col, Container } from "react-bootstrap";
// import clapping from '../../pages/Images/clapping.jpg'
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards'
// import HeroButton from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
class HomePage extends Component {
  render() {
    return (
<<<<<<< HEAD
    
      <div>
        <Hero />
        <hr className="solid"></hr>
        <Card/>
      </div>
=======

      <>
        <div>
          <Hero />
          <hr className="solid"></hr>
          <Card />
          <hr className="solid"></hr>
        </div>
        <Container className="mike">
        <Row>
          <Col>
            <Carousel />
          </Col>
        </Row>
        </Container>
      </>
>>>>>>> d4733091a54cfff2b067f458970efe2a97f66576


    );
  }
}
export default HomePage;
