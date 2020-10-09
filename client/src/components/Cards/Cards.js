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
      {props.items.map(item=><Card key={item._id } item={item}/>)}
      </MDBRow>
    </Container>
  );
}

export default Cards;
