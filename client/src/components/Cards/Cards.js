import React from "react";
import { Container } from "react-bootstrap";
import "../../components/Cards/Cards.css";
import Card from '../Card'
import { MDBRow } from "mdbreact";

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
