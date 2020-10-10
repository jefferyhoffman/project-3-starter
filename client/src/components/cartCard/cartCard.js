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
  const [quantity, setQuanity] = useState(0)
  // const [name, setName] = useState("")
  // const [size, setSize] = useState("")
  // const [color, setColor] = useState("")
  // const [price, setPrice] = useState(0)
    quantity = prevCount
  
  function increments () {
    const [count, setCount] = useState(2) 
    
    function decrementCount (){
      setCount(prevCount => prevCount - 1)
    }
    function incrementCount(){
      setCount(prevCount => prevCount + 1)
    }
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
          <MDBCardImage className="cardImg" src={props.photo} />
          <MDBMask overlay="black-light" className="blackLight">
            {/* <MDBBtn className="hoverBtn" outline color="white">
              View
            </MDBBtn> */}
          </MDBMask>
        </MDBView>


      </MDBCard>
    </MDBCol>
    </MDBRow>

    <MDBRow>
      
    <MDBCol md="6">
      <h5 className="text-left">{props.name}</h5>
      <p className="mb-3 text-left small">{props.inventory.color}</p>
      <p className="mb-3 text-left small">{props.inventory.size}</p>
    </MDBCol>
    
    <MDBCol md="6">
      <MDBBtn fluid size="sm" className="inline" onClick={this.decrementCount(prevCount)}>
        
        <i class="fas fa-minus"></i></MDBBtn>

      <input type="text" className="form-control w-25 inline" id="formGroupExampleInput" placeholder="1">{prevCount}</input> 

      <MDBBtn fluid size="sm"  className="inline" onClick={this.incrementCount(prevCount)}>
        <i class="fas fa-plus"></i></MDBBtn>
      <p>{props.price}</p>
    </MDBCol>
    </MDBRow>
</MDBRow>
)


}