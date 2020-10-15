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

  useEffect(() => {
    API.Users.getMe(context.authToken)
      .then(res => {
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, [API.Users]);


  console.log("CART =====>", items.cart)

  function decrementCount() {
    setCount(prevCount => Math.max(prevCount - 1, 0))
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (



    <MDBRow>
      {items.cart && items.cart.map(item => (
        <div>
          <MDBRow>
            <MDBCol md="12">

              <MDBCard
                className="z-depth-0"
                style={{ height: "384px", width: "220px" }}
              >
                {/* IMAGE */}
                <MDBView hover>
                  <MDBCardImage className="cardImg" src={`/images/${item.product.photo}`} />
                  <MDBMask overlay="black-light" className="blackLight">
                  </MDBMask>
                </MDBView>
              </MDBCard>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="6">
              <h5 className="text-left">{item.product.name}</h5>
              <p className="mb-3 text-left small">{item.color}</p>
              <p className="mb-3 text-left small">{item.size}</p>
            </MDBCol>

            <MDBCol md="6">
              <MDBBtn fluid size="sm" className="btn-dark" onClick={decrementCount}>
                <i class="fas fa-minus chk2"></i></MDBBtn>


              <span>{count}</span>

              <MDBBtn fluid size="sm" className="btn-dark " onClick={incrementCount}>
                <i class="fas fa-plus chk"></i></MDBBtn>
              <p>${item.product.price}</p>

            </MDBCol>
          </MDBRow>
        </div>
      ))}
    </MDBRow>




  );

}
export default Cart;