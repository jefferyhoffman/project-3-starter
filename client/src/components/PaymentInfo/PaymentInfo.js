import React, { Component } from "react"
import "./PaymentInfo.css"
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

// import "./Confirmation"

class PaymentInfo extends Component {
    static contextType = AuthContext;

    // state = {
    //     redirectToReferrer: false,
    //     error: ""
    //   }

    handleCheckout = (event) => {
        // event.preventDefault()
        console.log("paymentInfo handleCheckout");
        API.Services.checkout(this.context.authToken, this.props.date, this.props.products)
            .then(response => {
                this.setState({ redirectToReferrer: true })
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.setState({ error: "Sorry. Please try again." });
                }
            });
    }

    render() {

    // const { from } = this.props.location.state || { from: { pathname: "/ClientHome" } };
    // const { redirectToReferrer } = this.state;
    // console.log(this.props);
    // if (redirectToReferrer) {
    //   return <Redirect to={from} />
    // }

        return (
            <div className="row" style={{ marginTop: '40px', marginLeft: '20px', marginRight: '20px' }}>
                <div className="col">
                    <div className="card">
                        <div className="card-body" style={{ textAlign: 'left' }}>
                            <h2 className="card-title" style={{ textAlign: 'center' }}>Checkout</h2>
                            <form onSubmit = {this.handleCheckout}>
                                <div className="col-50" style={{ textAlign: 'left' }}>
                                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="firstname"
                                        placeholder=
                                        "John M. Doe" />
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
                                    <label for="adr" style={{ textAlign: 'left' }}><i className="fa fa-address-card-o"></i> Address</label>
                                    <input
                                        type="text"
                                        id="adr"
                                        name="address"
                                        placeholder="542 W. 15th Street" />
                                    <br />
                                    <label for="city"><i className="fa fa-institution"></i> City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="New York" />
                                    <br />
                                    <div className="row" style={{ textAlign: 'left' }}>
                                        <div className="col-50">
                                            <label for="state" style={{ marginLeft: '18px' }}>State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <br />
                                        <div className="col-50">
                                            <label for="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                        {/* <Link className='btn btn-outline-secondary waves-effect' style={{ margin: '40px', borderRadius: '4px' }} to ="../pages/ClientHome" onClick={this.handleCheckout}>Confirm order</Link>                                    </div> */}
                                        <Link to = "/Confirmation">
                                        <button style={{ marginLeft: '35%', borderRadius: '4px' }} onClick={this.handleCheckout}>Confirm order</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >

                <div className="col-sm-5">
                    <div className="card" style={{marginTop: '20px'}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{ textAlign: 'center'}}>Payment</h2>

                            <label for="cname" style={{ textAlign: 'left' }}>Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                            <label for="ccnum">Credit Card Number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                            <br />
                            <label for="expmonth">Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="May" />
                            <div className="row">
                                <div className="col-50" style={{ textAlign: 'left' }}>
                                    <label for="expyear" style={{ marginLeft: '15px' }}>Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" placeholder="2020" />
                                </div>
                                <div className="col-50">
                                    <label for="cvv" style={{ marginLeft: '15px' }}>CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                                </div>
                                {/* <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping Address Same as Billing
                            </label> */}
                                {/* <input type="submit" value="Keep Shopping" class="btn" id="keepshopping" /> */}
                            </div>
                            <input type="submit" value="Confirm and Pay Now" href = "/Confirmation" class="btn" style={{ marginLeft: '25%'}}/>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default PaymentInfo;
