import React from "react";
import { Container } from "react-bootstrap";
import lulu from "../../components/Cards/lulu.jpeg";
import "../../components/Cards/Cards.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
} from "mdbreact";

function Cards() {
  return (
    <Container>
      <MDBRow>
        <MDBCol>
          <MDBCard
            className="z-depth-0"
            style={{ height: "384px", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light">
                <MDBBtn className="hoverBtn" outline color="white">
                  View
                </MDBBtn>
              </MDBMask>
            </MDBView>

            <MDBCardText style={{ fontSize: "12px" }}>
              Flow Y Longline Bra
            </MDBCardText>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="z-depth-0"
            style={{ height: "384px", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light">
                <MDBBtn className="hoverBtn" outline color="white">
                  View
                </MDBBtn>
              </MDBMask>
            </MDBView>
            <MDBCardText style={{ fontSize: "12px" }}>
              Flow Y Longline Bra
            </MDBCardText>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="z-depth-0"
            style={{ height: "384px", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light">
                <MDBBtn className="hoverBtn" outline color="white">
                  View
                </MDBBtn>
              </MDBMask>
            </MDBView>
            <MDBCardText style={{ fontSize: "12px" }}>
              Flow Y Longline Bra
            </MDBCardText>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="z-depth-0"
            style={{ height: "384px", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light">
                <MDBBtn className="hoverBtn" outline color="white">
                  View
                </MDBBtn>
              </MDBMask>
            </MDBView>
            <MDBCardText style={{ fontSize: "12px" }}>
              Flow Y Longline Bra
            </MDBCardText>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
}

export default Cards;
