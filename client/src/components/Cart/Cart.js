import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Tshirt } from "../Tshirt/Tshirt";
import { TshirtList } from "../Tshirt/TshirtList";
import API from "../../lib/API";
import Modal from 'react-modal';


export const Cart = (props) => {
  const [cart, cartDispatch] = useContext(CartContext);
  const [modal, setModal] = React.useState(false);


  // const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const modifyCart = (id, amnt) => {
    // const mapOfCart = cart.map(val => {
    //   if (val.id === id) {
    //     val.quantity += amnt;
    //   }
    //   return val
    // }).filter(val => val.quantity)

    // localStorage.setItem("shoppingCart", JSON.stringify(mapOfCart));
    cartDispatch({
      type: "UPDATE_QUANTITY",
      id, amnt
    })
  }

  // const decrementCart = (event) => {

  //   var targetId = parseInt(event.target.id)

  //   const filterCartByID3 = cart.filter(val => {

  //     return targetId === val.id
  //   })

  //   if (filterCartByID3[0].quantity > 0) {

  //     const mapOfCart = cart.map(val => {

  //       if (val.id === targetId) {

  //         const tshirt = {
  //           name: val.name,
  //           description: val.description,
  //           image: val.image,
  //           price: val.price,
  //           id: val.id,
  //           quantity: val.quantity - 1
  //         };

  //         var tshirtID = tshirt.id
  //         localStorage.setItem(tshirtID, JSON.stringify(tshirt));
  //         return tshirt
  //       }
  //       return val
  //     })
  //     setCart(() => mapOfCart)
  //   }
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }

  // function closeModal() {
  //   setIsOpen(false);
  // }

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

      {/* added 10/10 5.08pm */}
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
      </div>

    </div>
  )
}

