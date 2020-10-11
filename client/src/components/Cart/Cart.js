import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Tshirt } from "../Tshirt/Tshirt";
import { TshirtList } from "../Tshirt/TshirtList";
import API from "../../lib/API";
import Modal from 'react-modal';


export const Cart = (props) => {
  const [cart, cartDispatch] = useContext(CartContext);
  const [modal, setModal] = useState(false);

  const modifyCart = (id, amnt) => {

    cartDispatch({
      type: "UPDATE_QUANTITY",
      id, amnt
    })
  }

  const handleCheckoutButton = (event) => {
    event.preventDefault();
    // const 
    // API.Orders.createOrder()
    //   .then(data => {
    //     console.log("order created")
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    console.log("submited")

  };

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
                {item.name} {item.quantity} x ${item.price.toFixed(2)}
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

