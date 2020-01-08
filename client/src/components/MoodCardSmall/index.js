import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css";

const MoodCardSmall = () => {
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
                        <h1 id="nameAndCompanyMoodSmall">Gabriel Mangum</h1>
                        <h1 id="nameAndCompanyMoodSmall">HR Inovations Incorporated</h1>
                        <p id="textMoodSmall">(123)-456-7890</p>
                        <p id="textMoodSmall">GabrielTMangum@gmail.com</p>
                        <p id="textMoodSmall">Futurum-est-nostrum.com</p>
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

export default MoodCardSmall;
