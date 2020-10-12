import React, { useState } from "react";
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
import Cards from '../../components/Cards/Cards'
import men from '../Home/guy.jpg';
import women from '../Home/women.jpg'
import bag from '../Home/bag.jpg'
import steve from '../Home/notstevecook.jpg'
import lulu from '../Home/lulu.jpeg'
// import HeroButton from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
import { Link } from "react-router-dom";

const HomePage = () => {
  const [items, setItems] = useState([{ photo: "lulu.jpeg", text: "Flow Y Longline Bra" }, { photo: "lulu.jpeg", text: "Flow Y Longline Bra" }, { photo: "lulu.jpeg", text: "Flow Y Longline Bra" }])
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
              <Link to={`/products/all/mens`}>
                <MDBCardImage
                  src={men}
                  className="img-fluid z-depth-3"
                  alt=""
                />

              </Link>
            </div>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">

            <div className="view zoom">
              <Link to={`/products/all/womens`}>
                <MDBCardImage
                  src={women}
                  className="img-fluid z-depth-3 y"
                  alt=""
                />

              </Link>

            </div>

          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <div className="view zoom">
              <Link to={`/products/category/bags`}>
                <MDBCardImage
                  src={bag}
                  className="img-fluid z-depth-3 y"
                  alt=""
                />

              </Link>

            </div>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <div className="view zoom">
              <Link to={`/products/category/wellness`}>
                <MDBCardImage
                  src={steve}
                  className="img-fluid z-depth-3 y"
                  alt=""
                />

              </Link>

            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
      {/* MENS BEST SELLERS  */}
      
      <hr className="solid"></hr>
      <MDBContainer className="">
        <MDBRow>
          <MDBTypography tag="h4" className="text-right" variant="display-4">Men's Best Sellers</MDBTypography>
          
          <MDBCol md={12}>
            <Cards
              items={items}
            />
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
     
      <hr className="solid"></hr>
      <MDBContainer>
        <MDBRow>
          <MDBTypography tag="h4" className="text-right" variant="display-4">Women's Best Sellers</MDBTypography>
          
          <MDBCol md={12}>
            <Cards
              items={items}
            />
          </MDBCol>
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

export default HomePage;
