import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const AddCart = () => {
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
          <MDBBtn href="#">Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default AddCart;