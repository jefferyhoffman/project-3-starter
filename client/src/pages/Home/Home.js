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
<<<<<<< HEAD

<>
        <div>
=======
      <div>
>>>>>>> d7ba62e398146f44b894b2af0b93fd13bdc5f005
        {/* HERO IMAGE */}
        <Hero />
        <hr className="solid"></hr>
        </div>
        <div className="fear">
        {/* BEST SELLER CARDS */}
        <MDBContainer >
        <MDBContainer >
          <MDBRow>
            {/* <MDBCol md={1} >
              
            </MDBCol> */}

            <MDBCol md={12}>
              <h3 variant="display-3">The Womens Best Sellers</h3>
              <Card />
            </MDBCol>
            {/* <MDBCol md={1}></MDBCol> */}
          </MDBRow>
        </MDBContainer>
        <hr className="solid"></hr>
        <MDBContainer >
          <MDBRow>
            {/* <MDBCol md={1}></MDBCol> */}
            <MDBCol md={12}>
              <h3 variant="display-3">The Mens Best Sellers</h3>
              <Card />
            </MDBCol>
            {/* <MDBCol md={1}></MDBCol> */}
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
<<<<<<< HEAD
        </MDBContainer>
      </div >
</>
=======
>>>>>>> d7ba62e398146f44b894b2af0b93fd13bdc5f005

      </div>

    );
  }
}
export default HomePage;
