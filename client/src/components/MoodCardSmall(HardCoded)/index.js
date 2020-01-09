import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css";

const MoodCardSmallHardCoded = () => {
    return (
      <React.Fragment>
        <MDBCol>
          <MDBCard className="just" id="MoodCardBorderSmall" style={{ width: "27rem", height: "16rem" }} >
            <MDBCol>
              <MDBCardBody>
                <MDBRow id="paddingMoodSmall">
                  <MDBCard id="CardBCGMoodSmall" style={{ width: "43rem", height: "13.5rem" }}>
                    <MDBCardBody className="white-text" id="cardBodyMoodSmall">
                      <MDBRow>
                        <MDBCol>
                          <h1 id="nameAndCompanyMoodSmall">Your Name</h1>
                          <h1 id="nameAndCompanyMoodSmall">Your Company</h1>
                          <p id="textMoodSmall">Your Phone Number</p>
                          <p id="textMoodSmall">Your Email</p>
                          <p id="textMoodSmall"><img src="http://api.qrserver.com/v1/create-qr-code/?size=40x40&data=HelloWorld!" /></p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
          </MDBCard>
        </MDBCol>
      </React.Fragment>
    );
};

export default MoodCardSmallHardCoded;
