import React, { Component } from "react"
import "./PaymentInfo.css"
import "./Confirmation"


class PaymentInfo extends Component {
    state = {
    }

    render() {
        return (

            <div className="row" style={{ marginTop: '40px', marginLeft: '20px', marginRight: '20px' }}>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Checkout</h2>
                            <form action="orderPlaced" action="GET">

                                {/* <div className="row">
                                <h3>Billing Address</h3> */}
                                <div className="col-50">
                                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="firstname"
                                        placeholder=
                                        "John M. Doe" />

                                    {/* <label for="email"><i className="fa fa-envelope"></i> Email</label> */}
                                    <div className='input-group mb-3'>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email</span>
                                        </div>
                                        <input
                                            className='form-control'
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com" />

                                    </div>


                                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input
                                        type="text"
                                        id="adr"
                                        name="address"
                                        placeholder="542 W. 15th Street" />

                                    <label for="city"><i className="fa fa-institution"></i> City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="New York" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label for="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label for="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default PaymentInfo;
