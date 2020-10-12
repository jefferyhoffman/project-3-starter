import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Tshirt } from "../Tshirt/Tshirt";
import { TshirtList } from "../Tshirt/TshirtList";
import API from "../../lib/API";
import Modal from 'react-modal';
import AuthContext from "../../contexts/AuthContext"


export const Cart = (props) => {
  const [cart, cartDispatch] = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const {user, authToken} = useContext(AuthContext)

  const modifyCart = (id, amnt) => {

    cartDispatch({
      type: "UPDATE_QUANTITY",
      id, amnt
    })
  }

  const submitCart = () => {
    cartDispatch({
        type: "SUBMIT_ORDER"
    })
  }

  const handleCheckoutButton = (event) => {
    event.preventDefault();
    // console.log(authToken);
    // console.log(cart)
    let productIdArray = [];
    for (let i =0; i<cart.length; i++){
      if(cart[i].quantity >1){
        for(let x =0; x<cart[i].quantity; x++){
          productIdArray.push(cart[i].id)
        }
      } else {
        productIdArray.push(cart[i].id)
      }
    }
    API.Orders.createOrder(productIdArray, authToken)
      .then(data => {
       
        // alert("Order Created " + JSON.stringify(data[0].OrderId));
        alert("order created " +  JSON.stringify(data.data[0][0].OrderId));
        console.log("order created", data.data[0]);
        submitCart();

      })
      .catch(err => {
        console.log(err)
      }) 
    // cart.map(item => (
    //   console.log(item.id, item.quantity)
    // )
    //   .then(data => {

    //     console.log("order created")
    //   })
    //   .catch(err => {
    //     console.log(err)
    // //   })
    
  }
  

  return (
    <div>
      <br />
      {!cart.length ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
          <div className="cart cart-header">

            You have {cart.reduce((acc, curr) => acc + curr.quantity, 0)} item(s) in the cart{" "}
            {cart.map((item, i) => (
              <p key={i + '-key'}>
               <span> <img src={item.image}/> {item.name} {item.quantity} x ${item.price.toFixed(2)}</span>
                <button onClick={() => modifyCart(item.id, 1)}>
                  <i className="fas fa-plus"></i>
                </button>
                <span> </span>
                <button onClick={() => modifyCart(item.id, -1)} >
                  <i className="fas fa-minus"></i>
                </button>
              </p>
            ))}
          </div>
        )}
      <br />
      <span>Total price : ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} </span>

      <button onClick={handleCheckoutButton}>Checkout</button>
      {/* added 10/10 5.08pm
      <div>

        <button onClick={() => setModal(true)}>Open Modal</button>
        <Modal
          isOpen={modal}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={() => setModal(false)}
          //   style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={() => setModal(false)}>close</button>
          <div>Cart</div>
          <p item={props.name}></p>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div> */}

    </div>
  )
}

