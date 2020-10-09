import React, { Component } from "react";
// import Hero from '../../components/Hero/Hero'
// import { Row, Col, MDBContainer } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCard,
  MDBIcon,
  MDBCardGroup,
  MDBCardImage,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBView,
  MDBMask,
  MDBBox
} from
  "mdbreact";
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards';
// import HeroButton from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';
import bestSellers from '../../components/bestSellers/bestSellers';
import men from '../Home/guy.jpg';
import women from '../Home/women.jpg'
import bag from '../Home/bag.jpg'
import steve from '../Home/notstevecook.jpg'
import lulu from '../Home/lulu.jpeg'

class HomePage extends Component {
  render() {
    return (

      <>
        <div id="apppage" className="view">
          {/* HERO IMAGE */}
          <Hero />
          <hr className="solid"></hr>
        </div>


        {/* CHOOSE YOUR LEISURE*/}
        {/* <section className="fear"> */}
        <MDBContainer className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Choose your <i>ascalon</i>
          </h2>
          <MDBBox mb={3} ><cite title="Source Title">Ascalon</cite> is a spear or a sword used by Saint George to slay Dragons.</MDBBox>
          <MDBRow>
            <br></br>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="view zoom">
                <a href="/!">
                  <MDBCardImage
                    src={men}
                    className="img-fluid z-depth-3"
                    alt=""
                  />

                </a>
              </div>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">

              <div className="view zoom">
                <a href="#!">
                  <MDBCardImage
                    src={women}
                    className="img-fluid z-depth-3 y"
                    alt=""
                  />

                </a>

              </div>

            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="view zoom">
                <a href="#!">
                  <MDBCardImage
                    src={bag}
                    className="img-fluid z-depth-3 y"
                    alt=""
                  />

                </a>

              </div>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <div className="view zoom">
                <a href="#!">
                  <MDBCardImage
                    src={steve}
                    className="img-fluid z-depth-3 y"
                    alt=""
                  />

                </a>

              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {/* </section> */}
        {/* BEST SELLERS  */}
        {/* <section className="sga"> */}
        <hr className="solid"></hr>
        <MDBContainer className="fear">
          <MDBRow>
            <MDBTypography tag="h4" variant="display-4">Mens Best Sellers</MDBTypography>
            <MDBCol md="12">
            <MDBCardGroup>
              <MDBCol md="3">
                {/* Individual Card */}
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg z-depth-3" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol md="3">
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu}  />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              {/* Individual Card */}
              <MDBCol md="3">
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>
                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              {/* Individual Card */}
              <MDBCol md="3">
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
            </MDBCardGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* </section> */}
        <hr className="solid"></hr>
        <MDBContainer>
          <MDBRow>
            <MDBTypography tag="h4" className="text-right" variant="display-4">Women Best Sellers</MDBTypography>
            <MDBCardGroup>
              <MDBCol md="3">
                {/* Individual Card */}
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol md="3">
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              {/* Individual Card */}
              <MDBCol md="3">
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>
                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              {/* Individual Card */}
              <MDBCol md="3">
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
              {/* Individual Card */}
              <MDBCol>
                <MDBCard
                  className="z-depth-0"
                  style={{ height: "384px", width: "220px" }}
                >
                  <MDBView hover>
                    <MDBCardImage className="cardImg" src={lulu} />
                    <MDBMask overlay="black-light" className="blackLight">
                      <MDBBtn className="hoverBtn" outline color="white">
                        View
                </MDBBtn>
                    </MDBMask>
                  </MDBView>

                  <MDBCardText style={{ fontSize: "12px" }}>
                    Flow Y Longline Bra
            </MDBCardText>
                </MDBCard>
              </MDBCol>
            </MDBCardGroup>
          </MDBRow>
        </MDBContainer>
        {/*  ATHLETE CAROUSEL */}
        <hr className="solid"></hr>
        <MDBContainer className="mike">
          <MDBRow>
            <MDBCol md={12}>
              <Carousel />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </>


    );
  }
}
export default HomePage;
// MDBContainer >
//         <MDBContainer  >
//           <MDBRow>

//             <MDBCol md={12}>
//               <h3 variant="display-3">The Womens Best Sellers</h3>
//               <Card />
//             </MDBCol>

//           </MDBRow>
//         </MDBContainer>
//         <hr className="solid"></hr>
//         <MDBContainer >
//           <MDBRow>

//             <MDBCol md={12}>
//               <h3 variant="display-3">The Mens Best Sellers</h3>
//               <Card />
//             </MDBCol>

//           </MDBRow>
//         </MDBContainer>
//         <hr className="solid"></hr>