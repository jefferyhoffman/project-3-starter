import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { TshirtList } from "../Tshirt/TshirtList";
// import { CartContext } from './CartContext';
// import { TshirtList } from "./TshirtList";

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    

    return (
        <div>
            <br />
            {cart.length === 0 ? (
                <div className="cart cart-header">Cart is empty</div>
            ) : (
                    <div className="cart cart-header">
                        You have {cart.reduce((acc, curr) => acc + curr.quantity, 0)} item(s) in the cart{" "}
                        {cart.map(item => (
                            <p key={item.id}>{item.name}{" "}{item.quantity}{" x "}{"$"}{item.price.toFixed(2)}
                            </p>
                        ))}
                    </div>
                )}

            <br />
            <span>Total price : {"$"}{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} </span>
            {/* <button onClick={removeCart}>Remove from Cart</button> */}
        </div>
    )
}