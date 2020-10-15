import React from 'react';
import { Link } from "react-router-dom";
import {
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBView,
    MDBMask,
  } from "mdbreact";
const Card = props => {
  // console.log(props);
    return(
        <MDBCol md={3} >
        <MDBCard
          className="z-depth-0"
          style={{ height: "fit-content", width: "220px" }}
        >
          <MDBView hover>
            <MDBCardImage className="cardImg" src={`/images/${props.item.photo}`} />
            <MDBMask overlay="black-light" className="blackLight">
            <Link to={`/product/${props.item._id}`}>
              <MDBBtn className="hoverBtn" outline color="white">
                View
              </MDBBtn>
            </Link>
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