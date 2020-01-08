import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css"


const PlainJoe = () => {
    return (
        <React.Fragment>
        <MDBCol>
            <MDBCard id="CardBCGPlainJoe" style={{width:"45rem", height: "22.8125rem"}}>
                <MDBCardBody className='white-text' id="cardBodyPlainJoe">
                    <MDBRow>
                        <MDBCol>
                        <div className="line2"></div>
                        {/* <img src={dude} className="img-fluid rounded-circle"/> */}
                        </MDBCol>
                        <MDBCol>
                            <h1 style={{fontSize: '72'}} id='namePlainJoe'>Gabriel Mangum</h1>
                            <p id='emailPlainJoe'>GabrielTMangum@gmail.com</p>
                            <p id='phonePlainJoe'>(123)-456-7890</p>
                            <p id='websitePlainJoe'>Futurum-est-nostrum.com</p>
                            <h1 style={{fontSize: '72', paddingTop: '1rem'}} id='companyPlainJoe'>HR Inovations Incorporated</h1>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </React.Fragment>
    )
}


export default PlainJoe;
