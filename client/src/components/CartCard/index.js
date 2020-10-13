import React, { useContext, useEffect, useState } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBCardImage,
  MDBView,
  MDBMask
} from
  "mdbreact";
import API from '../../lib/API';
import '../CartCard/index.css';
import AuthContext from '../../contexts/AuthContext';

const Cart = props => {
  const context = useContext(AuthContext)
  // const [cart, setCart]  = useState(0)
  const [items, setItems] = useState({})
  const [count, setCount] = useState(1)
  
  // function emptyCart (){
  //   if (items === []) {
  //     return <h1>Your cart is empty!</h1>
  //   }
  //     return 
  // } 

  useEffect(() => {
    API.Users.getMe(context.authToken)
      .then(res => {
        setItems(res.data);        
      })
      .catch(err => console.log(err));
  },[API.Users]);

  console.log("CART =====>",items.cart)
  console.log("we got this!===>", items);


  function decrementCount() {
    setCount(prevCount => Math.max(prevCount - 1 , 0))
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
          <h5 className="text-left">{items.name}</h5>
          {/* <p className="mb-3 text-left small">{props.inventory.color}whats</p> */}
          {/* <p className="mb-3 text-left small">{props.inventory.size}</p> */}
        </MDBCol>

        <MDBCol md="6">
          
          <MDBBtn fluid size="sm" className="btn-dark " onClick={incrementCount}>
            <i class="fas fa-plus chk"></i></MDBBtn>

          <span>{count}</span>

            <MDBBtn fluid size="sm" className="btn-dark"  onClick={decrementCount}>

            <i class="fas fa-minus chk2"></i></MDBBtn>
          <p>{props.price}</p>
        </MDBCol>
      </MDBRow>
    </MDBRow>



  );

}
export default Cart;