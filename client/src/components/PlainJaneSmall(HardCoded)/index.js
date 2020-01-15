import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css";
import Gravatar from 'react-gravatar';



const PlainJaneSmallHardCoded = () => {
    return (
        <React.Fragment>
            <MDBCol>
                <MDBCard id="CardBCGPlainJaneSmall" style={{width:"27rem", height: "15.6rem"}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol>
                            <Gravatar className="rounded-circle plainJaneImgSmall" email="youremail@example.com" size={100} />
                            </MDBCol>
                            <MDBCol>
                                <div>
                                    <h2 id="BisJaneSmall">Your Name</h2>
                                    <div id="pFontSmall">
                                        <p className="GenPadding text-left" id="NameJaneSmall">Your Company</p>
                                        <p className="text-left GenPadding" id="EmailJaneSmall">Your Email</p>
                                        <p className="text-left GenPadding"id="WebsiteJaneSmall">Your Website</p>
                                        <p className="text-left GenPadding"id="phoneJaneSmall">Your Phone Number</p>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </React.Fragment>
    );
};

export default PlainJaneSmallHardCoded;
