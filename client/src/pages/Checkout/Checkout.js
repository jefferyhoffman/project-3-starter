import React, { Component } from "react";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo"
import API from "../../lib/API";

const CheckoutList = (props) => {
    return props.products.map((productObject, index) => (
        <Product key={productObject.id} product={productObject} />
    ))
}

const Product = (props) => {
    return (
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.product.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Price: {props.product.price}</h6>
          <p class="card-text">{props.product.description}</p>
        </div>
      </div>
    )
}

class Checkout extends Component {
    state = {
        products:[
            {
                id: 'lkjhasdlkgfjhdlfgkjh4356897',
                title: 'Thing 1',
                description: 'the ultimate lawn fertilizer',
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