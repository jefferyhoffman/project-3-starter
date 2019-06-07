import React, { Component } from "react";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo"
import "./Checkout.css"
import { StripeProvider } from 'react-stripe-elements';
// import API from "../../lib/API";
import MyStoreCheckout from './MyStoreCheckout';


const CheckoutList = (props) => {
    return props.products.map((productObject, index) => (
        <Product key={productObject.id} product={productObject} />
    ))
}



const Product = (props) => {
    return (
        <>

            {/* <div className="card">
             <div className="card-body">
              <h5 className="card-title">{props.product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Price: ${props.product.price}</h6>
                <p className="card-text">{props.product.description}</p>
           <div className="col-sm-7"> */}
            <div className="row">

                <div className="col-sm-7">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Your Order</h2>
                            <h5 className="card-title">Selected Services: {props.product.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Total Price: ${props.product.price}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
        console.log(this.props)
        return (
            <div>
                <CheckoutList products={this.state.products} />
                <StripeProvider apiKey="k_test_XnGjYTSLwoIxJVpB5iIDHyXZ00Q9tfKq2U">
                <MyStoreCheckout />
                </StripeProvider>
                < PaymentInfo />
            </div>
        )
    }
};
export default Checkout