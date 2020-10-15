import React, { useContext, useEffect, useState } from 'react'
import { MDBRow } from "mdbreact";
import API from '../../lib/API';
import './index.css';
import AuthContext from '../../contexts/AuthContext';
import CartCardItem from '../CartCardItem';

const Cart = props => {
  const context = useContext(AuthContext)
  const [items, setItems] = useState({})

 

  return (
    <MDBRow className="ml-4">
      {context.user.cart && context.user.cart.map(item => (
        <CartCardItem key={item._id}
        item={item}/>
      ))}
    </MDBRow>
  );

}
export default Cart;