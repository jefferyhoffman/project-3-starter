import React from 'react';
import { isAuthenticated, ItemCount } from '../repository';
import {  Redirect, Link } from 'react-router-dom';

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}

	componentWillMount() {
		let cart = this.state.cart;
		let itemCount = 0;
		if (!cart) return; 
		itemCount(cart)
		.then((products) => {
			let total = 0;
			for (var i = 0; i < products.length; i++) {
				total += products[i].price * products[i].qty;
			}
	    	this.setState({ products, total });
	    });
	}

	render() {
		if (!isAuthenticated()) return (<Redirect to="/login" />);
		const { products, total } =  this.state;
		return (
			<div className=" containerCheckout">
				<h3 className="card-title">Checkout</h3>
				<hr/>
				{
					products.map((product, index) => 
						<div key={index}>
							<p>
								{product.name} 
								<small> (quantity: {product.quantity})</small>
								<span className="float-right text-primary">${product.quantity * product.price}</span>
							</p><hr/>
						</div>
					)
				}
				<hr/>
				{ products.length && <div><h4><small>Total Amount:</small><span className="float-right text-primary">${total}</span></h4><hr/></div>} 
				{/* { !products.length ?  */}
				<h3 className="text-warning">No item on the cart</h3>
				{/* : ''} */}
				{ products.length &&  <button className="btn btn-success float-right" onClick={() => alert('Proceed to Pay')}>Pay</button> }
				<Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link>
				<br/><br/><br/>
			</div>
		);
	}
}
