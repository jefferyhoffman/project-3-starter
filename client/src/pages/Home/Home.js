import React, { Component } from "react";
// import Hero from '../../components/Hero/Hero'
// import { Row, Col, MDBContainer } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from
  "mdbreact";
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards'
// import HeroButton from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'

class HomePage extends Component {
  render() {
    return (

<>
        <div id="apppage" className="view">
        {/* HERO IMAGE */}
        <Hero />
        <hr className="solid"></hr>
        </div>
       
        
        {/* BEST SELLER CARDS */}
        <MDBContainer >
        <MDBContainer  >
          <MDBRow>
          
            <MDBCol md={12}>
              <h3 variant="display-3">The Womens Best Sellers</h3>
              <Card />
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
        <hr className="solid"></hr>
        <MDBContainer >
          <MDBRow>
            
            <MDBCol md={12}>
              <h3 variant="display-3">The Mens Best Sellers</h3>
              <Card />
            </MDBCol>
           
          </MDBRow>
        </MDBContainer>
        <hr className="solid"></hr>
        {/*  ATHLETE CAROUSEL */}
        <MDBContainer className="mike">
          <MDBRow>
            <MDBCol md={12}>
              <Carousel />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </MDBContainer>
        
</>


    );
  }
}
export default HomePage;
