import React from 'react';
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
const Card =props=>{
    return(
        <MDBCol>
        <MDBCard
          className="z-depth-0"
          style={{ height: "384px", width: "220px" }}
        >
          <MDBView hover>
            <MDBCardImage className="cardImg" src={`/images/${props.item.photo}`} />
            <MDBMask overlay="black-light" className="blackLight">
              <MDBBtn className="hoverBtn" outline color="white">
                View
              </MDBBtn>
            </MDBMask>
          </MDBView>

          <MDBCardText style={{ fontSize: "12px" }}>
            {props.item.name}
          </MDBCardText>
        </MDBCard>
      </MDBCol>
    )
} 
export default Card