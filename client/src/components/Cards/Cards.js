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
  MDBRow
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
            <MDBCardImage className="cardImg" src={lulu} />
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
            <MDBCardImage className="cardImg" src={lulu} />
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
            <MDBCardImage className="cardImg" src={lulu} />
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
            <MDBCardImage className="cardImg" src={lulu} />
            <MDBCardText style={{ fontSize: "12px" }}>
              Flow Y Longline Bra
            </MDBCardText>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* <Row>
        <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  </Row> */}
    </Container>
  );
}

export default Cards;
