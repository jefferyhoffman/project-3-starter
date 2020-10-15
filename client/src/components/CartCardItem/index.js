import React, { useContext, useEffect, useState } from 'react'
import { MDBRow,MDBCol,MDBCard,MDBBtn,MDBCardImage,MDBView,MDBMask} from "mdbreact";
import API from '../../lib/API';
import '../CartCard/index.css';
import AuthContext from '../../contexts/AuthContext';

const CartCardItem = ({item}) => {
  const context = useContext(AuthContext)
  // const [cart, setCart]  = useState(0)
//   const [items, setItems] = useState({})
  const [count, setCount] = useState(1)

  console.log(context); 

  const cartDelete = () => {
     const id = context.user._id
     const itemID = item._id
  // console.log("Pull/Delete Data ====>", id, itemID)

    API.Users.removeCartItem(context.authToken, { _id: id, _id: itemID})
      .then(res => {
        context.onRefresh();
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  function decrementCount() {
  setCount(prevCount => Math.max(prevCount - 1, 0))
  }
  function incrementCount() {
 setCount(prevCount => prevCount + 1)
  }
  return (
    <MDBRow>
        
        <div key={item._id}>
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
              <MDBBtn fluid="true" size="sm" className="btn-dark" onClick={e => decrementCount(e.currentTarget)}>
                <i className="fas fa-minus chk2"></i></MDBBtn>


              <span className="">{count}</span>

              <MDBBtn fluid="true" size="sm" className="btn-dark" onClick={e => incrementCount(e.currentTarget)}>
                <i className="fas fa-plus chk"></i></MDBBtn>
              <p className="price font-weight-bold">${item.product.price}</p>

              <MDBBtn fluid="true" size="md" className="btn-dark" onClick={cartDelete}>
              <i className="far fa-trash-alt"></i> Remove</MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
    </MDBRow>
  );

}
export default CartCardItem;