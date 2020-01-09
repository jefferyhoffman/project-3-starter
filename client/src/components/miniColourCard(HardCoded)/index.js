import React from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody} from "mdbreact";
import "./style.css"
import logo from '../../images/logo.png'

const MiniColourCardHardCoded = () => {
    return (
        <React.Fragment>
            <MDBCol>
                <MDBCard className="miniColourBody" style={{width: "27rem", height: "16rem" }}>
                        <MDBRow>
                            <MDBCol>
                            <MDBCard style={{width: '13rem'}}>
                                <MDBCardBody className="minilogoSideColour rounded minitopLogoPadding" style={{height: "16rem"}}>
                                <img src={logo}></img>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <div className="text-white">
                                    <h2 className="mininameColour minicolorMainPadding">Your Name</h2>
                                    <div className="minifontColourp">
                                        <strong>
                                        <p className="minicolorCompName">Your Company</p>
                                        <p className="minicolorEmail">Your Email</p>
                                        <p className="minicolorWebsite">"Your Website</p>
                                        <p className="minicolorPhone">Your Phone Number</p>
                                        </strong>
                                    </div>
                                </div>
                            <div className="QRCODEPadding">
                            <img src="http://api.qrserver.com/v1/create-qr-code/?size=40x40&data=HelloWorld!" />
                            </div>
                            </MDBCol>
                        </MDBRow>
                </MDBCard>
            </MDBCol>
        </React.Fragment>        
    );
};

export default MiniColourCardHardCoded;

