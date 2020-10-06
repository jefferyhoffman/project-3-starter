import React, { Component } from "react";

// import Hero from '../../components/Hero/Hero'
import { Row, Col } from "react-bootstrap";
// import clapping from '../../pages/Images/clapping.jpg'
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards'
// import HeroButton from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
class HomePage extends Component {
  render() {
    return (
      
<>
      <Jumbotron>
        <Image src={clapping} fluid/>
        </Jumbotron>

      <div>
        <Hero />
        <hr className="solid"></hr>
        <Card/>
        <hr className="solid"></hr>
        <Carousel />
      </div>
</>


    );
  }
}
export default HomePage;
