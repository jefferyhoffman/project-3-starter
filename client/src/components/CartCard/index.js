import React, { useContext, useEffect, useState } from 'react'
import { MDBRow } from "mdbreact";
import API from '../../lib/API';
import './index.css';
import AuthContext from '../../contexts/AuthContext';
import CartCardItem from '../CartCardItem';

const Cart = props => {
  const context = useContext(AuthContext)
  const [items, setItems] = useState({})

  useEffect(() => {
    API.Users.getMe(context.authToken)
      .then(res => {
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, [API.Users]);


  // console.log("CART =====>", items.cart)

  return (
    <MDBRow className="ml-4">
      {items.cart && items.cart.map(item => (
        <CartCardItem key={item._id}
        item={item}/>
      ))}
    </MDBRow>
  );

}
export default Cart;