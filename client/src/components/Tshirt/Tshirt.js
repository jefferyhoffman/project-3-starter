import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
// import { CartContext } from './CartContext';


export const Tshirt = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        
        const filterCartByID = cart.filter(val => {
            return props.id === val.id
        })
        // console.log("filterCartByID", filterCartByID)

        if (filterCartByID.length > 0) {

            const mapOfCart = cart.map(val => {
                // console.log(val.id, props.id)
                // console.log(cart)
                if (val.id === props.id) {
                    // console.log("hit")
                    const tshirt = {
                        name: val.name,
                        description: val.description,
                        image: val.image,
                        price: val.price,
                        id: val.id,
                        quantity: val.quantity + 1
                    };

                    return tshirt
                }

                return val
            })
            // console.log("mapOfCart", mapOfCart)
            setCart(() => mapOfCart)
        } else {
            const tshirt = {
                name: props.name,
                description: props.description,
                image: props.image,
                price: props.price,
                id: props.id,
                quantity: 1
            };
            // console.log("first");
            setCart(currentState => [...currentState, tshirt]);
        }

    }

    // const removeFromCart = () => {

    //     const filterCartByID = cart.filter(val => {
    //         return props.id === val.id
    //     })
    //     // console.log("filterCartByID", filterCartByID)

    //     if (filterCartByID.length > 0) {

    //         const mapOfCart = cart.map(val => {
    //             // console.log(val.id, props.id)
    //             // console.log(cart)
    //             if (val.id === props.id) {
    //                 // console.log("hit")
    //                 const tshirt = {
    //                     name: val.name,
    //                     description: val.description,
    //                     image: val.image,
    //                     price: val.price,
    //                     id: val.id,
    //                     quantity: val.quantity -1
    //                 };

    //                 return tshirt
    //             }

    //             return val
    //         })
    //         // console.log("mapOfCart", mapOfCart)
    //         setCart(() => mapOfCart)
    //     }}

    return (
        <div className="card">
            <div className="imgBx">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="contentBx">
                <h2 key={props.id}>{props.name}</h2>
                <p>{"$" + props.price.toFixed(2)}</p>
                <p>{props.description}</p>
                <button onClick={addToCart}>Add to Cart</button>
                {/* <button onClick={removeFromCart}>Remove from Cart</button> */}
            </div>
        </div>
    )
}

