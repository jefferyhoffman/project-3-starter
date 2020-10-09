import React, { Component } from "react";
// import Hero from '../../components/Hero/Hero'
// import { Row, Col, MDBContainer } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCard,
  MDBIcon
} from
  "mdbreact";
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards'
// import HeroButton from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
import bestSellers from '../../components/bestSellers/bestSellers'

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

        <MDBContainer className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Our Mens Best Sellers
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Slay your dragons in our best selling athleisure. 
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe-dark">
                    <a href="#!">
                      <p>
                        Red trousers <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="#!">
                      <p>
                        Sweatshirt <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="#!">
                      <p>
                        Accessories <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="stripe dark">
                    <a href="#!">
                      <p>
                        Sweatshirt <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>



        {/*  ATHLETE CAROUSEL */}
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