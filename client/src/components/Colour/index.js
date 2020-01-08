import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from "mdbreact";
import "./style.css"
import logo from '../../images/logo.png'


const Colour = () => {
    return (
        <React.Fragment>
        <MDBCol>
            <MDBCard id="HH" style={{width:"45rem", height: "22.8125rem"}}>
                <MDBCardBody className="ColourBody">
                    <MDBRow>
                        <MDBCol>
                        <MDBCard>
                        <MDBCardBody className="logoSideColour">
                        <img src={logo}></img>
                        </MDBCardBody>
                    </MDBCard>
                        </MDBCol>
                        <MDBCol></MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </React.Fragment>
    )
}


export default Colour;
