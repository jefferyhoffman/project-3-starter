import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import checkout from "../../"
// import ReactDOM from "react-dom";
// import './Services.css';

class Modal extends Component {
    state = {
        premiumPckg: false
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => {
            // Calculation to determine total
            var total = 0;
            console.log(this.state.premiumPckg);
            if (this.state.premiumPckg) {
                total += 350
            }
            if (this.state.upgradedPckg) {
                total += 200
            }
            if (this.state.standardPckg) {
                total += 100
            }
            if (this.state.aeration) {
                total += 50
            }
            if (this.state.reseeding) {
                total += 50
            }
            if (this.state.trimming) {
                total += 50
            }
            if (this.state.pineNeedles) {
                total += 50
            }
            if (this.state.leafRemoval) {
                total += 50
            }
            if (this.state.pesticide) {
                total += 50
            }
            if (this.state.topiary) {
                total += 50
            }
            if (this.state.pruning) {
                total += 50
            }
            if (this.state.soil) {
                total += 50
            }
            if (this.state.mulch) {
                total += 50
            }

            this.setState({
                total: total
            });
            console.log(total);
        });



    }
    render() {
        //better for rendering data??
        // const { from } = this.props.location.state || { from: { pathname: "/checkout" } };
        // const { redirectToReferrer } = this.state;

        // if (redirectToReferrer) {
        //     return <Redirect to={from} />;
        // }
        return (
            <div className="App">


                {/* //         <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalQuickView">Launch
        //           modal</button>


        //         <div className="modal fade" id="modalQuickView" tabindex="-1" role="dialog" */}
                {/* //             aria-labelledby="exampleModalLabel" aria-hidden="true">
        //             <div className="modal-dialog modal-lg" role="document">
        //                 <div className="modal-content">
        //                     <div className="modal-body">
        //                         <div className="row">
        //                             <div className="col-lg-5" />
        //                             <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel" />
        //                             <div className="carousel-inner" role="listbox">
        //                                 <div className="carousel-item active">
        //                                     <img className="d-block w-100" src="./images/cobra.jpg" alt="First slide" />
        //                                 </div>
        //                                 <div className="carousel-item">
        //                                     <img className="d-block w-100" src="./images/lawnmower.jpg" alt="Second slide" />
        //                                 </div>
        //                                 <div className="carousel-item">
        //                                     <img className="d-block w-100" src="./images/puglawn.jpg" alt="Third slide" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>



        //             <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
        //                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //                 <span className="sr-only">Previous</span>
        //             </a>
        //             <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
        //                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //                 <span className="sr-only">Next</span>
        //             </a>


        //             <ol className="carousel-indicators">
        //                 <li data-target="#carousel-thumb" data-slide-to="0" className="active">
        //                     <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
        //                         width="60" />
        //                 </li>
        //                 <li data-target="#carousel-thumb" data-slide-to="1">
        //                     <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
        //                         width="60" />
        //                 </li>
        //                 <li data-target="#carousel-thumb" data-slide-to="2">
        //                     <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
        //                         width="60" />
        //                 </li>
        //             </ol>
        //         </div > */}

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
                                    <input className="form-check-input" name="premiumPckg" type="checkbox" id="radio-579" value="option1" onChange={this.handleInputChange} />
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
                                <input className="form-check-input" name="upgradedPckg" type="checkbox" id="radio-579" value="option2" onChange={this.handleInputChange} />
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
                            <input className="form-check-input" name="aeration" type="checkbox" id="radio-179" value="option4" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-179">Core Aeration</label>
                        </div>

                        <div className="form-check mb-4">
                            <input className="form-check-input" name="reseeding" type="checkbox" id="radio-279"
                                value="option5" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-279">Reseeding: Fescue and Bermuda</label>
                        </div>

                        <div className="form-check mb-4">
                            <input className="form-check-input" name="trimming" type="checkbox" id="radio-379"
                                value="option6" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-379">Hedge Trimming/Shaping</label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" name="pineNeedles" type="checkbox" id="radio-479"
                                value="option7" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-479">Pine Needles</label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" name="leafRemoval" type="checkbox" id="radio-579"
                                value="option8" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-579">Leaf Removal</label>
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-check mb-4">
                            <input className="form-check-input" name="pesticide" type="checkbox" id="radio-179"
                                value="option9" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-179">Pesticide Application</label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" name="topiary" type="checkbox" id="radio-279"
                                value="option10" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-27">Artistic Topiary Design</label>
                        </div>

                        <div className="form-check mb-4">
                            <input className="form-check-input" name="pruning" type="checkbox" id="radio-379"
                                value="option11" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-379">Tree Pruning</label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" name="soil" type="checkbox" id="radio-479"
                                value="option12" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-479">Soil Testing</label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" name="mulch" type="checkbox" id="radio-579"
                                value="option13" onChange={this.handleInputChange} />
                            <label className="form-check-label" for="radio-579">Mulch</label>
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
                                        <Link className='btn btn-outline-secondary waves-effect' to='/checkout'>Checkout</Link>

                                        {/* <a type="button" className="btn btn-outline-secondary waves-effect"
                                            data-dismiss="modal">Checkout</a> */}
                                    </div>
                                    <a type="button" className="btn btn-outline-warning"
                                        data-dismiss="modal">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}


export default Modal;
