import React, { Component } from 'react';
import "./Checkout.css";
import { Link } from 'react-router-dom'
// import Collections, {Component } from 'collections'
// import ProductCard, { Component } from 'productCard'
// import "/.Checkout.css"

class CheckoutForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        cardnumber: '',
        expdate: '',
        cname: '',
        cvv: '',
        item: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,

        });
    }
    handleSubmit = event => {
        const { firstname, lastname, email, address, address2, city, state, zip,
            cardnumber, cname, cvv, expdate } = this.state;

        this.props.onSubmit(firstname, lastname, email, address, address2,
            city, state, zip, cardnumber, cname, cvv, expdate);
        event.preventDefault();
    }

    render() {
        const { firstname, lastname, email, address, address2, city,
            state, zip, cardnumber, cname, cvv, expdate } = this.state;

        return (
            <div className='Cart'>
                <div id="checkoutCard" className='card'>
                    <form className='CheckoutForm' onSubmit={this.handleSubmit}>
                        <div className='card-body'>
                            <div className="containerCheckout">
                                {/* <div className="row"> */}
                                <div className="checkoutHeader">Please enter your information.</div>
                                <div className="col-5">
                                    <div className='input-group mb-3'>
                                        
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">First Name</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            placeholder=" "
                                            value={firstname}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Last Name</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="ltname"
                                            name="lastname"
                                            placeholder=" "
                                            value={lastname}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* <div className="row"> */}
                                <div className="col-10">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder=" "
                                            value={email}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* <div className="row"> */}
                                <div className="col-10">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Address</span>
                                        </div>
                                        <input

                                            className='form-control'
                                            type="text"
                                            id="address"
                                            name="address"
                                            placeholder="                 "
                                            value={address}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* <div className="row"> */}
                                <div className="col-10">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Address 2 (Optional)</span>
                                        </div>
                                        <input

                                            className='form-control'
                                            type="text"
                                            id="address2"
                                            name="address2"
                                            placeholder="                 "
                                            value={address2}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* <div className="row"> */}
                                <div className="col-5">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">City</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder=" "
                                            value={city}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">State</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="state"
                                            name="state"
                                            placeholder=" "
                                            value={state}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Zip</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="zip"
                                            name="zip"
                                            placeholder="  "
                                            value={zip}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* </div> */}

                                <div className="paymentHeader">
                                    <h5>Payment</h5>
                                    <p>Accepted Cards</p>
                                </div>

                                {/* <div className="row"> */}
                                <div className="col-5">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Name on Card</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="cname"
                                            name="expyear"
                                            placeholder="  "
                                            value={cname}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Card Number</span>
                                        </div>

                                        <input
                                            className='form-control'
                                            type="text"
                                            id="cname"
                                            name="expyear"
                                            placeholder="  "
                                            value={cardnumber}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* <div class="row"> */}
                                <div className="col-5">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Exp Date (MM/YY)</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="expdate"
                                            name="expdate"
                                            placeholder="  "
                                            value={expdate}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">CVV</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            placeholder="  "
                                            value={cvv}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                </div>
                                {/* </div> */}

                                
                                   <Link to="/thankyou"><button id="checkoutBtn2" className='btn btn-primary' type='submit'>Checkout</button></Link>
                                

                            </div>

                            {/* <h6>Your Shopping Cart</h6> */}
                            <div className="col-12">
                                <div className="container">
                                    <span className="shopping-cart">Your Cart</span>

                                    <span> {this.itemcount} </span>

                                </div>
                                {/* <button className='btn btn-primary' type='submit'>Sunbmit</button> */}
                            </div>
                        </div >

                    </form>

                </div >
            </div >



        )
    }
}

export default CheckoutForm;