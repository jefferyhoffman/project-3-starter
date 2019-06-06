import React, { Component } from "react";


class Confirmation extends Component {

    render() {
        return (
            <div className="Container">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="modal fade-right" id="confirmationModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                                <div className="modal-dialog modal-full-height modal-right modal-center modal-notify modal-info" role="document">
                                    <div className="modal-content">

                                        <div className="card-header">
                                            <p className="heading lead">Order Placed!</p>
                                            <button type="button" className="close" data-dismiss="moda l" aria-label="Close">
                                                <span aria-hidden="true" className="white-text">×</span>
                                            </button>
                                        </div>
                                        <p className="text-center">
                                            <strong>Your order has been placed, a lawn care speciliast will contact you 24hrs before your appointment.</strong></p>

                                        <div className="md-form">
                                            <textarea type="text" id="form79textarea" className="md-textarea form-control"
                                                rows="3"></textarea>
                                        </div>
                                        <button className='btn btn-outline-secondary waves-effect' to='/Home'>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirmation 