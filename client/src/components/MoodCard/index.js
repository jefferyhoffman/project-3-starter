import React from "react";
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import "./style.css";

const MoodCard = () => {
  return (
    <React.Fragment>
      <MDBCol>
        <MDBCard className="just" id="MoodCardBorder" style={{ width: "45rem", height: "22.815rem" }} >
          <MDBCol>
            <MDBCardBody>
              <MDBRow id="paddingMood">
                <MDBCard id="CardBCGMood" style={{ width: "43rem", height: "20.5rem" }}>
                  <MDBCardBody className="white-text" id="cardBodyMood">
                    <MDBRow>
                      <MDBCol>
                        <h1 style={{ fontSize: "72" }} id="nameMood">Gabriel Mangum</h1>
                        <h1 style={{ fontSize: "72" }} id="companyMood">HR Inovations Incorporated</h1>
                        <p id="phoneMood">(123)-456-7890</p>
                        <p id="emailMood">GabrielTMangum@gmail.com</p>
                        <p id="websiteMood">Futurum-est-nostrum.com</p>
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

export default MoodCard;
