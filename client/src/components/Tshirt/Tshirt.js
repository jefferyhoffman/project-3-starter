import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Tshirt = (props) => {
    const [cart, cartDispatch] = useContext(CartContext);

    
    const addToCart = () => {
        cartDispatch({
            type:"ADD_TO_CART",
            payload: props 
        })
        // const filterCartByID = cart.filter(val => {
        //     return props.id === val.id
        // })

        // if (filterCartByID.length > 0) {

        //     const mapOfCart = cart.map(val => {

        //         if (val.id === props.id) {

        //             const tshirt = {
        //                 name: val.name,
        //                 description: val.description,
        //                 image: val.image,
        //                 price: val.price,
        //                 id: val.id,
        //                 quantity: val.quantity + 1
        //             };
        //             var tshirtID = tshirt.id
        //             localStorage.setItem(tshirtID, JSON.stringify(tshirt));
        //             return tshirt
        //         }
        //         return val
        //     })
        //     setCart(() => mapOfCart)
        // } else {
        //     const tshirt = {
        //         name: props.name,
        //         description: props.description,
        //         image: props.image,
        //         price: props.price,
        //         id: props.id,
        //         quantity: 1
        //     };
        //     setCart(currentState => [...currentState, tshirt]);
        //     var tshirtID = tshirt.id
        //     localStorage.setItem(tshirtID, JSON.stringify(tshirt));
        // }
    }

    return (
        <div className="card">
            <div className="imgBx">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="contentBx">
                <h4 key={props.id}>{props.name}</h4>
                <p className="rise">{"$" + props.price.toFixed(2)}</p>
                <p className="rise">{props.description}</p>
                <button onClick={addToCart}>Add to Cart</button>
                {/* <button onClick={removeFromCart}>Remove from Cart</button> */}
            </div>
        </div>
    )
}

