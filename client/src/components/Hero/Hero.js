import React from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation, MDBTypography } from
    "mdbreact";
// import stance from '../../pages/Home/stance.jpg'
// import clapping from '../../pages/Home/clapping.jpg'
import '../Hero/Hero.css'


function Hero() {
    return (
        <MDBContainer fluid className="img-container">
            <MDBRow>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </MDBRow>
            <MDBRow>
                <br></br>
                <br></br>
                
            </MDBRow>
            <MDBRow>
                <br></br>
                <br></br>
                <br></br>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBTypography colorText="white" tag='h1' variant="h1-responsive">Slay Your Dragon</MDBTypography>
                </MDBAnimation>
                   
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <br></br>
              
                <br></br>
            </MDBRow>
            <MDBRow>
            <MDBCol md="4"></MDBCol>
                <MDBCol md="2">
                    <MDBBtn color="mdb-color" >Shop Mens</MDBBtn>
                </MDBCol>
                <MDBCol md="2">
                    <MDBBtn color="mdb-color" >Shop Womens</MDBBtn>
                </MDBCol>
                <MDBCol md="4"></MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}


export default Hero;