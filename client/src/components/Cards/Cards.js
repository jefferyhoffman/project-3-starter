import React from "react";
import { Container } from "react-bootstrap";
import "../../components/Cards/Cards.css";
import Card from '../Card'
import { MDBRow } from "mdbreact";

const Cards=(props)=> {
  
  return (
    <Container>
      <MDBRow>
<<<<<<< HEAD
      {/* {props.items.map(item=><Card key={item._id } item={item}/>)} */}
        
         <MDBCol md={4}>
          <MDBCard
            className="z-depth-0"
            style={{ height: "fit-content", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light" className="blackLight">
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
        <MDBCol md={4}>
          <MDBCard
            className="z-depth-0"
            style={{ height: "fit-content", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light" className="blackLight">
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
        <MDBCol md={4}>
          <MDBCard
            className="z-depth-0"
            style={{ height: "fit-content", width: "220px" }}
          >
            <MDBView hover>
              <MDBCardImage className="cardImg" src={lulu} />
              <MDBMask overlay="black-light" className="blackLight">
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
=======
      {props.items.map(item=><Card key={item._id } item={item}/>)}
>>>>>>> 218a228425612c28e7f51055af2a5490f40a39a6
      </MDBRow>
    </Container>
  );
}

export default Cards;
