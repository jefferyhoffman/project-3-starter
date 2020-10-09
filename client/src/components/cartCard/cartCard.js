import React, { Component, useState } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBMask
} from
  "mdbreact";
  import API from '../../lib/API'



const cart = props => {
  const [something, setSomething] = useState
  const [somethingElse, setSomethingElse] = useState
  const [somethingOtherThanElse, setSomethingOtherThanElse] = useState
  const [someNumber, setSomeNumber] = useState
  
  function increments () {
    const [count, setCount] = useState(2) 
    
  }
 
  return (
    <MDBRow> 
            
    <MDBRow>
    <MDBCol md="12">
      <MDBCard
        className="z-depth-0"
        style={{ height: "384px", width: "220px" }}
      >
        {/* IMAGE */}
        <MDBView hover>
          <MDBCardImage className="cardImg" src={lulu2} />
          <MDBMask overlay="black-light" className="blackLight">
            <MDBBtn className="hoverBtn" outline color="white">
              View
            </MDBBtn>
          </MDBMask>
        </MDBView>


      </MDBCard>
    </MDBCol>
    </MDBRow>

    <MDBRow>
      
    <MDBCol md="6">
      <h5 className="text-left">Blue Shirt</h5>
      <p className="mb-3 text-left small">Shirt: Blue</p>
      <p className="mb-3 text-left small">Color: Blue</p>
      <p className="mb-3 text-left small">Size: M</p>
    </MDBCol>
    
    <MDBCol md="6">
      <MDBBtn fluid size="sm" className="inline">
        
        <i class="fas fa-minus"></i></MDBBtn>

      <input type="text" className="form-control w-25 inline" id="formGroupExampleInput" placeholder="1"/>  

      <MDBBtn fluid size="sm"  className="inline">
        <i class="fas fa-plus"></i></MDBBtn>
      <p>35.99</p>
    </MDBCol>
    </MDBRow>
</MDBRow>
)


}