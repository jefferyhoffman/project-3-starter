import React, { useEffect, useState } from "react";
import {MDBContainer,MDBRow,MDBCol,MDBTypography,MDBCardImage,MDBBox} from "mdbreact";
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
import API from '../../lib/API'

const HomePage = () => {
  const [mensBest, setMensBest] = useState([])
  const [womensBest, setWomensBest] = useState([])

  useEffect(() => {
    API.Products.getAllByGender("Mens")
    .then(res => {
      console.log(res.data)
      setMensBest(res.data)
    })
    .catch(err => console.log(err));
  }, [API.Products])
  
  useEffect(() => {
    API.Products.getAllByGender("Womens")
    .then(res => {
      console.log(res.data)
      setWomensBest(res.data)
    })
    .catch(err => console.log(err));
  }, [API.Products])

  return (

    <div>
      <div>
        {/* HERO IMAGE */}
        <Hero />
        <hr className="solid"></hr>
      </div>


      {/* CHOOSE YOUR LEISURE*/}
      
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
          <MDBTypography tag="h4" className="text-md-right text-sm-center" variant="display-4">Men's Best Sellers</MDBTypography>
          
          <MDBCol md={12} className = "pl-5">
         
            <Cards
              items={mensBest.slice(0,4)}
            />
        
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
     
      <hr className="solid"></hr>
     
      <MDBContainer >
        <MDBRow >
          <MDBTypography tag="h4" className="text-md-right text-sm-center" variant="display-4">Women's Best Sellers</MDBTypography>
          <MDBCol md={12} className = "pl-5">
       
            <Cards
              items={womensBest.slice(0,4)}
            />
            {/* </div>  */}
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

    </div>


  );
}

export default HomePage;
