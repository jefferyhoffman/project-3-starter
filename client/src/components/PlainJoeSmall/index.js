import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css"
import dude from '../../images/PlainJoeLogo.png'


const PlainJoeSmall = () => {
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
                            <h1 id='nameAndCompanyPlainJoeSmall'>Gabriel Mangum</h1>
                            <p id='textPlainJoeSmall'>GabrielTMangum@gmail.com</p>
                            <p id='textPlainJoeSmall'>(123)-456-7890</p>
                            <p id='textPlainJoeSmall'>Futurum-est-nostrum.com</p>
                            <h1 style={{fontSize: '72'}} id='nameAndCompanyPlainJoeSmall'>HR Inovations Incorporated</h1>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </React.Fragment>
    )
}


export default PlainJoeSmall;
