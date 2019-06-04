import React, { Component } from 'react';

// import "/.Checkout.css"

class Cart extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardnumber: '',
        expmonth: '',
        expyear: '',
        cname: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,

        });
    }
    handleSubmit = event => {
        const { firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear, cname } = this.state;

        this.props.onSubmit(firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear);
        event.preventDefault();
    }

    render() {
        const { firstname, lastname, email, address, city, state, zip, cardnumber, expmonth, expyear, cname } = this.state;

        return (
            <div className='Cart'>
                <div className='card'>
                    <div className='card-body'>
                        <form className='Cart' onSubmit={this.handleSubmit}>
                            <div className="col-50">
                                <div className="container">
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
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">email</span>
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
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Card Number</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="cardnumber"
                                            name="cardnumber"
                                            placeholder=" "
                                            value={cardnumber}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Exp Month</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="expmonth"
                                            name="expmonth"
                                            placeholder="  "
                                            value={expmonth}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Exp Year</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="expyear"
                                            name="expyear"
                                            placeholder="  "
                                            value={expyear}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>


                                </div>
                                <h4>Payment</h4>
                                <p>Accepted Cards</p>
                            </div>

                            <div className="col-6">
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
                            <div className="col-6">
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
                            <div>
                                <button className='btn btn-primary' type='submit'>Checkout</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;