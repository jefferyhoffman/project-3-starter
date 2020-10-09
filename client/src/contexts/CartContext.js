import React, { useEffect, useState } from "react";

var cartLocalAll = [];
var cartLocalStorage1 = JSON.parse(localStorage.getItem("1"));
var cartLocalStorage2 = JSON.parse(localStorage.getItem("2"));
var cartLocalStorage3 = JSON.parse(localStorage.getItem("3"));
var cartLocalStorage4 = JSON.parse(localStorage.getItem("4"));

if (cartLocalStorage1 !== null && cartLocalStorage1.quantity !== 0 ) {
    cartLocalAll.push(cartLocalStorage1)
}
if (cartLocalStorage2 !== null && cartLocalStorage2.quantity !== 0 ) {
    cartLocalAll.push(cartLocalStorage2)
}
if (cartLocalStorage3 !== null && cartLocalStorage3.quantity !== 0 ) {
    cartLocalAll.push(cartLocalStorage3)
}
if (cartLocalStorage4 !== null && cartLocalStorage4.quantity !== 0 ) {
    cartLocalAll.push(cartLocalStorage4)
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