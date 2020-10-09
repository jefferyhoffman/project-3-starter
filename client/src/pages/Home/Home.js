import React, {useState } from "react";
// import Hero from '../../components/Hero/Hero'
// import { Row, Col, MDBContainer } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol } from
  "mdbreact";
import "../Home/home.css";
import Hero from "../../components/Hero/Hero";
import Card from '../../components/Cards/Cards'
// import HeroButton from '../../components/Button/Button'
import Carousel from '../../components/Carousel/Carousel'
const HomePage = () =>{
  const [items, setItems]= useState([{image:"lulu.jpeg", text: "Flow Y Longline Bra"},{image:"lulu.jpeg", text: "Flow Y Longline Bra"},{image:"lulu.jpeg", text: "Flow Y Longline Bra"}])
    return (
      <div>
        {/* HERO IMAGE */}
        <Hero />
        <hr className="solid"></hr>

        {/* BEST SELLER CARDS */}
        <MDBContainer >
          <MDBRow>
            <MDBCol md={1}></MDBCol>
            <MDBCol md={10}>
              <Card
              items = {items}
               />
            </MDBCol>
            <MDBCol md={1}></MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr className="solid"></hr>
        <MDBContainer >
          <MDBRow>
            <MDBCol md={1}></MDBCol>
            <MDBCol md={10}>
            <Card
              items = {items}
               />
            </MDBCol>
            <MDBCol md={1}></MDBCol>
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

      </div>

    );
  }

export default HomePage;
