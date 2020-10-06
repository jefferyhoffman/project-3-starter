import React, { Component } from "react";

// import Hero from '../../components/Hero/Hero'
import { Row, Col } from "react-bootstrap";
// import clapping from '../../pages/Images/clapping.jpg'
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards'
// import HeroButton from '../../components/Button/Button'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <hr className="solid"></hr>
        <Card/>
      </div>
    );
  }
}
export default HomePage;
