import React, { Component } from "react";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo"
import "./Checkout.css"
import { StripeProvider } from 'react-stripe-elements';
// import API from "../../lib/API";
import myStoreCheckout from './myStoreCheckout';


const CheckoutList = (props) => {
    return props.products.map((productObject, index) => (
        <Product key={productObject.id} product={productObject} />
    ))
}

const Product = (props) => {
    console.log(props);
    return (
        <div className="col-sm-7">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Your Order</h2>
                    <h5 className="card-title">Selected Services: {props.product.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: ${props.product.price}</h6>
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

    render() {
        console.log(this.props)
        const products = [];
        if(this.props.premiumPckg){
            products.push({
                id: 1,
                title: "Premium Package",
                price: 350
            })
        }
        if(this.props.upgradedPckg){
            products.push({
                id:2,
                title: "Upgraded Package",
                price: 200
            })
        }
        if(this.props.standardPckg){
            products.push({
                id:3,
                title: "Standard Package",
                price: 100
            })
        }
        if(this.props.aeration){
            products.push({
                id:4,
                title: "Aeration",
                price: 50
            })
        }
        if(this.props.reseeding){
            products.push({
                id:5,
                title: "Reseeding",
                price: 50
            })
        }
        if(this.props.trimming){
            products.push({
                id:6,
                title: "Trimming",
                price: 50
            })
        }
        if(this.props.pineNeedles){
            products.push({
                id:7,
                title: "Pine Needles",
                price: 50
            })
        }
        if(this.props.leafRemoval){
            products.push({
                id:8,
                title: "Leaf Removal",
                price: 50
            })
        }
        if(this.props.pesticide){
            products.push({
                id:9,
                title: "Pesticide",
                price: 50
            })
        }
        if(this.props.pruning){
            products.push({
                id:10,
                title: "Pruning",
                price: 50
            })
        }
        if(this.props.soil){
            products.push({
                id:11,
                title: "Soil",
                price: 50
            })
        }
        if(this.props.mulch){
            products.push({
                id:12,
                title: "Mulch",
                price: 50
            })
        }
        return (
            <div>
                <StripeProvider apiKey="k_test_XnGjYTSLwoIxJVpB5iIDHyXZ00Q9tfKq2U">
                <myStoreCheckout />
                </StripeProvider>
                <CheckoutList products={products}/>
                <PaymentInfo />
            </div>
        )
    }
};
export default Checkout