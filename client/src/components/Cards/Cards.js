import React,{useState} from "react";
import { Container } from "react-bootstrap";
import lulu from "../../components/Cards/lulu.jpeg";
import "../../components/Cards/Cards.css";
import Card from '../Card'
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

const Cards=(props)=> {
  
  return (
    <Container>
      <MDBRow>
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
      </MDBRow>
    </Container>
  );
}

export default Cards;
