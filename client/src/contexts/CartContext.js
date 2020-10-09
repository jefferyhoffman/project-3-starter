import React, { useEffect, useState } from "react";
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

var cartLocalAll = [];

for (var i = 1; i <= 5; i++) {
    var cartLocalStorage = JSON.parse(localStorage.getItem(i));
    if (cartLocalStorage !== null && cartLocalStorage.quantity !== 0 ) {
        cartLocalAll.push(cartLocalStorage)
    }
}


export const CartContext = React.createContext();

export const CartProvider = (props) => {

    const [cart, setCart] = useState(cartLocalAll);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}