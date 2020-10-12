import React, { useReducer, useState } from "react";
// import productsList from "../components/Tshirt/TshirtList";
// import products from TshirtList
// import API from "../../lib/API";

// var productList;
// API.Products.getAllProducts().then(data => {
//     productList =  data.data
// });

// var cartLocalAll = [];
// console.log(productsList)

// for (var i = 1; i <= productsList.length; i++) {
//     var cartLocalStorage = JSON.parse(localStorage.getItem(i));
//     if (cartLocalStorage !== null && cartLocalStorage.quantity !== 0 ) {
//         cartLocalAll.push(cartLocalStorage)
//     }
// }

// var cartLocalAll = [];

// for (var i = 1; i <= 5; i++) {
//     var cartLocalStorage = JSON.parse(localStorage.getItem(i));
//     if (cartLocalStorage !== null && cartLocalStorage.quantity !== 0 ) {
//         cartLocalAll.push(cartLocalStorage)
//     }
// }


const cartLocalAll = JSON.parse(localStorage.getItem('shoppingCart')) || []

export const CartContext = React.createContext();

let mapOfCart;
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            let found;
            mapOfCart = state.map(val => {
                if (val.id === action.payload.id) {
                    found = true;
                    val.quantity += 1
                }
                return val
            })
            if (!found) mapOfCart.push({ ...action.payload, quantity: 1 })
            localStorage.setItem("shoppingCart", JSON.stringify(mapOfCart));
            return mapOfCart

        case "UPDATE_QUANTITY":
            mapOfCart = state.map(val => {
                if (val.id === action.id) {
                    val.quantity += action.amnt;
                }
                return val
            }).filter(val => val.quantity)
            localStorage.setItem("shoppingCart", JSON.stringify(mapOfCart));
            return mapOfCart

        case "SUBMIT_ORDER":
            mapOfCart = state.map(val => {
                val.quantity = 0;
                return val;
            }).filter(val => val.quantity)
            localStorage.setItem("shoppingCart", JSON.stringify(mapOfCart));
            return mapOfCart
    }
}

export const CartProvider = (props) => {
    const [cart, setCart] = useReducer(reducer, cartLocalAll);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}