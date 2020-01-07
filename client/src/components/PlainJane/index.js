import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import background from "../../images/colorful-poly.png"
import dude from "../../images/final-body.png"
import "./style.css"


const PlainJane = () => {
    return (
        <React.Fragment>
        <MDBCol>
            <MDBCard className="CardBCG" style={{width:"45rem"}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol>
                        <img src={dude} className="img-fluid rounded-circle"/>
                        </MDBCol>
                        <MDBCol>
                            <p>Hello</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </React.Fragment>
    )
}


export default PlainJane;
