import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css"
import dude from '../../images/PlainJoeLogo.png'


const PlainJoeSmallHardCoded = () => {
    return (
        <React.Fragment>
            <MDBCol>
                <MDBCard id="CardBCGPlainJoeSmall" style={{ width: "27rem", height: "16rem" }}>
                    <MDBCardBody className='white-text' id="cardBodyPlainJoeSmall">
                        <MDBRow>
                            <MDBCol>
                                <div className="line2"></div>
                                <img src={dude} className="img-fluid" id='PlainJoeSmallLogo' />
                            </MDBCol>
                            <MDBCol>
                                <h1 id='nameAndCompanyPlainJoeSmall'>Your Name</h1>
                                <p id='textPlainJoeSmall'>Your Email</p>
                                <p id='textPlainJoeSmall'>Your Phone Number</p>
                                <p id='textPlainJoeSmall'>Your Website</p>
                                <h1 style={{fontSize: '72'}} id='nameAndCompanyPlainJoeSmall'> Your Company Name</h1>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </React.Fragment>
    );
};

export default PlainJoeSmallHardCoded;
