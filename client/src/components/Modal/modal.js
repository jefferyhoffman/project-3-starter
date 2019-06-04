import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import './Services.css';

class Modal extends Component {

    render() {
        return (
            <div className="App">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalQuickView">Launch
                  modal</button>


                <div className="modal fade" id="modalQuickView" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-5" />
                                    <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel" />
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="./images/cobra.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="./images/lawnmower.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="./images/puglawn.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>


                    <ol className="carousel-indicators">
                        <li data-target="#carousel-thumb" data-slide-to="0" className="active">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                                width="60" />
                        </li>
                        <li data-target="#carousel-thumb" data-slide-to="1">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
                                width="60" />
                        </li>
                        <li data-target="#carousel-thumb" data-slide-to="2">
                            <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
                                width="60" />
                        </li>
                    </ol>
                </div >

                <div className="col-lg-7" >
                    <h2 className="h2-responsive product-name">
                        <strong>June Special! All individual treatments are only $50!</strong>
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
                                    <input className="form-check-input" name="group1" type="checkbox" id="radio-579" value="option10" />
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
                            aria-expanded="false" aria-controls="collapseTwo2" style={{ color: "#336600" }} />
                        <h5 className="mb-0">
                            <h4 className="h4-responsive" style={{ color: "#336600" }}>
                                <span className="green-text">
                                    <strong>$200</strong>
                                </span>
                            </h4>
                            Upgraded Maintance Package <i className="fas fa-angle-down rotate-icon"></i>
                        </h5>
                    </div>

                    <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                        data-parent="#accordionEx" >
                        <div className="card-body">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-579" value="option10" />
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
                            aria-expanded="false" aria-controls="collapseThree3" style={{ color: "#336600" }} />
                        <h5 className="mb-0" />
                        <h4 className="h4-responsive" style={{ color: "#336600" }} />
                        <span className="green-text">
                            <strong>$100</strong>
                        </span>
                        Standard Maintance Package<i className="fas fa-angle-down rotate-icon"></i>
                    </div>


                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                        <div className="card-body">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-579"
                                    value="option10" />
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
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-179" value="option1"
                                    checked />
                                <label className="form-check-label" for="radio-179">Core Aeration</label>
                            </div>

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group2" type="checkbox" id="radio-279"
                                    value="option2" />
                                <label className="form-check-label" for="radio-279">Reseeding-fescue and Bermuda </label>
                            </div>

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-379"
                                    value="option3" />
                                <label className="form-check-label" for="radio-379">Hedge Trimming/Shaping</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-479"
                                    value="option4" />
                                <label className="form-check-label" for="radio-479">Pine Needle</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-579"
                                    value="option5" />
                                <label className="form-check-label" for="radio-579">Leaf Removal</label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-179"
                                    value="option6" checked />
                                <label className="form-check-label" for="radio-179">Pesticide Treatment</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-279"
                                    value="option7" />
                                <label className="form-check-label" for="radio-279">Artistic Topiary Design</label>
                            </div>

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-379"
                                    value="option8" />
                                <label className="form-check-label" for="radio-379">Pesticide Applications</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-479"
                                    value="option9" />
                                <label className="form-check-label" for="radio-479">Soil Testing</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="group1" type="checkbox" id="radio-579"
                                    value="option10" />
                                <label className="form-check-label" for="radio-579">Mulch</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <button type="button" id="btn" className="btn btn-outline-warning" data-toggle="modal"
                    data-target="#modalPoll-1" style= {{color: "#336600"}}>Book Services</button>

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
                                            data-dismiss="modal">Book</a>
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


export default Modal;
