import React, { useEffect, useState } from 'react'
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
import API from '../../lib/API';



// const cart = (props) => {
  const Cart = props => {
  // const [name, setName] = useState("")
  // const [size, setSize] = useState("")
  // const [color, setColor] = useState("")
  // const [price, setPrice] = useState(0)
  const [items, setItems] = useState([])
  const [count, setCount] = useState(1)

  useEffect(() => {
    // const authToken = props.match.params.authToken
  API.Users.getMe()
  .then(res => {
    console.log(res.data)
    setItems(res.data)
  })
  .catch(err => console.log(err));
  })
  
  
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
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
          {/* <p className="mb-3 text-left small">{props.inventory.color}</p> */}
          {/* <p className="mb-3 text-left small">{props.inventory.size}</p> */}
        </MDBCol>

        <MDBCol md="6">
          <MDBBtn fluid size="sm" className="inline" onClick={decrementCount}>

            <i class="fas fa-minus"></i></MDBBtn>

        <span>{count}</span>

          <MDBBtn fluid size="sm" className="inline" onClick={incrementCount}>
            <i class="fas fa-plus"></i></MDBBtn>
          <p>{props.price}</p>
        </MDBCol>
      </MDBRow>
    </MDBRow>
  


  );

}
export default Cart;