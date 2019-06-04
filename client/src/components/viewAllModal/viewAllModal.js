import React, { Component } from 'react';


class Completed extends Component {

    render() {
        return (
            <div className="App">

        <div className="col-lg" >
                    <h2 className="h2-responsive product-name" >
                        <strong >Completed Services</strong>
                    </h2>
                </div>
                <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true" >
                    <div className="card">

                        <div className="card-header" role="tab" id="headingOne1">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                aria-controls="collapseOne1" style={{ color: "#336600" }}>
                                <h5 className="mb-0">
                                    <h4 className="h4-responsive" style={{ color: "#336600" }}>
                                        <span className="green-text">
                                            <strong>$350</strong>
                                        </span>
                                    </h4>
                                    Premium Maintance Package<i className="fas fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>


                        <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <div className="form-check mb-4">
                                    <input className="form-check-input" name="group1" type="checkbox" id="radio-579" value="option1" />
                                    <label className="form-check-label" for="radio-579"></label>
                                    You'll be the envy of all the neighbors with our premium package.
                                    This full coverage lawn care coverage package includes aeration, mowing, seeding, weed
                                    prevention,
                                    resoding, tree/hedge trimming and fall leaf removal.
                                    Spend your days enjoying your yard and let Greenscapes do the hard work for you!
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">


                    <div className="card-header" role="tab" id="headingTwo2">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                            aria-expanded="false" aria-controls="collapseTwo2" style={{ color: "#336600" }} >
                            <h5 className="mb-0">
                                <h4 className="h4-responsive" style={{ color: "#336600" }}>
                                    <span className="green-text">
                                        <strong>$200</strong>
                                    </span>
                                </h4>
                                Upgraded Maintance Package <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>

                    <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                        data-parent="#accordionEx" >
                        <div className="card-body">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-579" value="option2" />
                                <label className="form-check-label" for="radio-579"></label>
                                Enjoy our standard package but looking to do a little less work this summer? The upgraded
                                package
                                includes all of the standard package benefits plus
                                aeration and lawn seeding in the spring as well as full leaf removal in the fall.
                            </div>
                        </div>
                    </div >
                </div>


                <div className="card">

                    <div className="card-header" role="tab" id="headingThree3">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                            aria-expanded="false" aria-controls="collapseThree3" style={{ color: "#336600" }} >
                            <h5 className="mb-0" >
                                <h4 className="h4-responsive" style={{ color: "#336600" }}>
                                    <span className="green-text">
                                        <strong>$100</strong>
                                    </span>
                                </h4>
                                Standard Maintance Package<i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>


                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                        <div className="card-body">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-579"
                                    value="option3" />
                                <label className="form-check-label" for="radio-579"></label>
                                Just need the basics covered? We've got you with our standard maintance package. This covers
                                mowing, tree/hedge trimming and weed prevention treatments.
                                </div>
                        </div>
                    </div>
                </div>

                <p className="text-center">
                    <strong>Service Options</strong>
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-179" value="option4" />
                                <label className="form-check-label" for="radio-179">Service</label>
                            </div>

                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-279">Reseeding-fescue and Bermuda </label>
                            </div>

                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-379">Hedge Trimming/Shaping</label>
                            </div>
                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-479">Pine Needle</label>
                            </div>
                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-579">Leaf Removal</label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-179">Date Booked</label>
                            </div>
                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-279">05/08/2019</label>
                            </div>

                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-379">05/08/2019</label>
                            </div>
                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-479">05/08/2019</label>
                            </div>
                            <div className="form-check mb-4">
                                <label className="form-check-label" for="radio-579">05/08/2019</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <button type="button" id="btn" className="btn btn-outline-warning" data-toggle="modal"
                    data-target="#modalPoll-1" style={{ color: "#336600" }}>Book Services</button>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="modal fade right" id="modalPoll-1" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                                <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <p className="heading lead">Additional Information</p>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" className="white-text">×</span>
                                            </button>
                                        </div>
                                        <p className="text-center">
                                            <strong>Please note any important information about your home/yard below.</strong></p>

                                        <div className="md-form">
                                            <textarea type="text" id="form79textarea" className="md-textarea form-control"
                                                rows="3"></textarea>
                                        </div>
                                        <a type="button" className="btn btn-outline-secondary waves-effect"
                                            data-dismiss="modal">Checkout</a>
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


export default Completed;