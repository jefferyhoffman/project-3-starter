import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation, MDBTypography } from
    "mdbreact";
// import stance from '../../pages/Home/stance.jpg'
// import clapping from '../../pages/Home/clapping.jpg'
import '../Hero/Hero.css'


const Hero = props => {
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
                <MDBTypography colorText="white" tag='h1' abbr="false" variant="display-1">Slay Your Dragon</MDBTypography>
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
                <Link to={`/products/all/mens`}>
                    <MDBBtn color="mdb-color" >Shop Mens</MDBBtn>
                    </Link>
                </MDBCol>
                <MDBCol md="2">
                <Link to={`/products/all/womens`}>
                    <MDBBtn color="mdb-color" >Shop Womens</MDBBtn>
                    </Link>
                </MDBCol>
                <MDBCol md="4"></MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}


export default Hero;