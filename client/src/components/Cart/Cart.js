import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Tshirt } from "../Tshirt/Tshirt";
import { TshirtList } from "../Tshirt/TshirtList";

export const Cart = () => {

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    const incrementCart = (event) => {
        
        var targetId = parseInt(event.target.id)
    
        const filterCartByID2 = cart.filter(val => {
            return targetId === val.id
        })
    
        
    
            const mapOfCart = cart.map(val => {
    
                    if (val.id === targetId) {
    
                    const tshirt = {
                        name: val.name,
                        description: val.description,
                        image: val.image,
                        price: val.price,
                        id: val.id,
                        quantity: val.quantity + 1
                    };
                    var tshirtID = tshirt.id
                    localStorage.setItem(tshirtID, JSON.stringify(tshirt));
                    return tshirt
                }
                return val
            })
            setCart(() => mapOfCart)
            // localStorage.setItem("cart", JSON.stringify(mapOfCart));
               
        }
    
 
    const decrementCart = (event) => {
        
        var targetId = parseInt(event.target.id)

        const filterCartByID2 = cart.filter(val => {
            return targetId === val.id
        })

        if (filterCartByID2[0].quantity > 0) {

            const mapOfCart = cart.map(val => {

                    if (val.id === targetId) {

                    const tshirt = {
                        name: val.name,
                        description: val.description,
                        image: val.image,
                        price: val.price,
                        id: val.id,
                        quantity: val.quantity -1
                    };
                    var tshirtID = tshirt.id
                    localStorage.setItem(tshirtID, JSON.stringify(tshirt));
                    return tshirt
                }
                return val
            })
            setCart(() => mapOfCart)
            // var tshirtID = tshirt.id
            // localStorage.setItem(tshirtID, JSON.stringify(tshirt));
            // localStorage.setItem("cart", JSON.stringify(mapOfCart));
        }

    
    }

    return ( 
        <div>
            <br />
            {cart.length === 0 ? (
                <div className="cart cart-header">Cart is empty</div>
            ) : (
                    <div className="cart cart-header">
                        You have {cart.reduce((acc, curr) => acc + curr.quantity, 0)} item(s) in the cart{" "}
                        {cart.map(item => (
                            <p id={item.id} key={item.id}>{item.name}{" "}{item.quantity}{" x "}{"$"}{item.price.toFixed(2)}   
                            <span> </span>
                            <button id={item.id} ><i id={item.id} onClick={incrementCart} className="fas fa-plus"></i></button>
                            <span> </span>
                            <button id={item.id} ><i id={item.id} onClick={decrementCart} className="fas fa-minus"></i></button>
                            </p>
                        ))}
                    </div>
                )}
            <br />
            <span>Total price : {"$"}{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} </span>     
        </div>  
    )
}
