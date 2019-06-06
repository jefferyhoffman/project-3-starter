import React, { Component } from "react";
import { Link } from 'react-router-dom';
import cardSection from "../../pages/Checkout/CardSection";


class Confirmation extends Component {

    render() {
        return (
            <div className="Container">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-header">
                                <p className="heading lead">Order Placed!</p>
                            </div>
                            <p className="text-center">
                                <strong>Your order has been placed, a lawn care specialist will contact you 24hrs before your appointment.</strong></p>

                            <div className="md-form">
                                <textarea type="text" id="form79textarea" className="md-textarea form-control"
                                    rows="3"></textarea>
                            </div>
                            <Link className='btn btn-outline-secondary waves-effect' to='/ClientHome'>Close</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirmation; 