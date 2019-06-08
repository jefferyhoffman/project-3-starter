import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Modal extends Component {
    state = {
        premiumPckg: false
    }

    handleInputChange = (event) => {
        event.preventDefault()
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.props.handleModalUpdate(name, value)
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <div className="col-lg" >
                    <h2 className="h2-responsive product-name" >
                        <strong >June Special: Individual Treatments Only $50!</strong>
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
                                    Premium Maintenance Package<i className="fas fa-angle-down rotate-icon"></i>
                                </h5>
                            </a>
                        </div>


                        <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <div className="form-check mb-4">
                                    <input className="form-check-input" name="premiumPckg" type="checkbox" id="radio-579" value="option1" checked={this.props.premiumPckg} onChange={this.handleInputChange} />
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
                                Upgraded Maintenance Package <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>

                    <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                        data-parent="#accordionEx" >
                        <div className="card-body">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="upgradedPckg" type="checkbox" id="radio-579" value="option2" checked={this.props.upgradedPckg} onChange={this.handleInputChange} />
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
                                Standard Maintenance Package<i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                        </a>
                    </div>


                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                        data-parent="#accordionEx">
                        <div className="card-body">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="standardPckg" type="checkbox" id="radio-579"
                                    value="option3" onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-579"></label>
                                Just need the basics covered? We've got you with our standard maintenance package. Service includes
                                mowing, tree/hedge trimming and weed prevention treatments.
                                </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <p className="text-center">
                    <h4><strong>Add On Additional Services</strong></h4>
                    <h5><strong>+ $50 Each</strong></h5>
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="aeration" type="checkbox" id="radio-179" value="option4" checked={this.props.aeration} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-179">Core Aeration</label>
                            </div>

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="reseeding" type="checkbox" id="radio-279"
                                    value="option5" checked={this.props.reseeding} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-279">Reseeding: Fescue and Bermuda</label>
                            </div>

                            <div className="form-check mb-4">
                                <input className="form-check-input" name="trimming" type="checkbox" id="radio-379"
                                    value="option6" checked={this.props.trimming} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-379">Hedge Trimming/Shaping</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="pineNeedles" type="checkbox" id="radio-479"
                                    value="option7" checked={this.props.pineNeedles} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-479">Pine Needles</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="leafRemoval" type="checkbox" id="radio-579"
                                    value="option8" checked={this.props.leafRemoval} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-579">Leaf Removal</label>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="pesticide" type="checkbox" id="radio-179"
                                    value="option9" checked={this.props.pesticide} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-179">Pesticide Application</label>
                            </div>


                            <div className="form-check mb-4">
                                <input className="form-check-input" name="pruning" type="checkbox" id="radio-379"
                                    value="option11" checked={this.props.pruning} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-379">Tree Pruning</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="soil" type="checkbox" id="radio-479"
                                    value="option12" checked={this.props.soil} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-479">Soil Testing</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="mulch" type="checkbox" id="radio-579"
                                    value="option13" checked={this.props.mulch} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-579">Mulch</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input" name="topiary" type="checkbox" id="radio-579"
                                    value="option13" checked={this.props.topiary} onChange={this.handleInputChange} />
                                <label className="form-check-label" for="radio-579">Topiary</label>
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
                                                <Link className='btn btn-outline-secondary waves-effect' to='/Checkout'>Checkout</Link>
                                            </div>
<<<<<<< HEAD
                                            <Link className='btn btn-outline-secondary waves-effect' to='/Checkout'>Checkout</Link>
                                        </div>
=======
                                        </div>
                                        {/* <p className="text-center">
                                            <strong>Please note any important information about your home/yard below.</strong></p> */}

                                        <div className="md-form">
                                            <textarea type="text" id="form79textarea" className="md-textarea form-control"
                                                rows="3"></textarea>

                                        </div>


                                        {/* <a type="button" className="btn btn-outline-secondary waves-effect"
                                            data-dismiss="modal">Checkout</a> */}
>>>>>>> 837b99555b7680d7024f4b187c51765a49cab342
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                </div>
                
                )
            }
        }
        
        
        export default Modal;
