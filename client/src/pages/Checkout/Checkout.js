import React, { Component } from "react";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo"
import "./Checkout.css"
// import API from "../../lib/API";

const CheckoutList = (props) => {
    return props.products.map((productObject, index) => (
        <Product key={productObject.id} product={productObject} />
    ))
}

const Product = (props) => {
    return (
        <div class="col-sm-7">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Your Order</h2>
                    <h5 class="card-title">Selected Services: {props.product.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Total Price: ${props.product.price}</h6>
                    {/* <p class="card-text">{props.product.description}</p> */}
                </div>
            </div>
        </div>
    )
}

class Checkout extends Component {
    state = {
        products: [
            {
                id: '1234',
                title: 'Service 1',
                // description: 'the ultimate lawn fertilizer',
                price: 100.00
            }
        ]

    };

    // componentDidMount() {
    //     API.getusersProducts
    // }

    render() {
        return (
            <div>
                <CheckoutList products={this.state.products}
                />
                <PaymentInfo />
            </div>
        )
    }
};
export default Checkout