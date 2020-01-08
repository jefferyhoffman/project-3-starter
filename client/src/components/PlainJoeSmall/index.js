import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css"
import dude from '../../images/PlainJoeLogo.png'


const PlainJoeSmall = () => {
    return (
        <React.Fragment>
        <MDBCol>
            <MDBCard id="CardBCGPlainJoeSmall" style={{width:"45rem", height: "22.8125rem"}}>
                <MDBCardBody className='white-text' id="cardBodyPlainJoeSmall">
                    <MDBRow>
                        <MDBCol>
                        <div className="line2"></div>
                        <img src={dude} className="img-fluid"/>
                        </MDBCol>
                        <MDBCol>
                            <h1 style={{fontSize: '72'}} id='namePlainJoe'>Gabriel Mangum</h1>
                            <p id='emailPlainJoeSmall'>GabrielTMangum@gmail.com</p>
                            <p id='phonePlainJoeSmall'>(123)-456-7890</p>
                            <p id='websitePlainJoeSmall'>Futurum-est-nostrum.com</p>
                            <h1 style={{fontSize: '72', paddingTop: '1rem'}} id='companyPlainJoeSmall'>HR Inovations Incorporated</h1>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </React.Fragment>
    )
}


export default PlainJoeSmall;
