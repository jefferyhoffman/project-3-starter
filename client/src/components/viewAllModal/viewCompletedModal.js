import React, { Component } from 'react';
import ClientHome from '../pages/ClientHome/ClientHome.js'

class Completed extends Component {

    render() {
        return (
            <div className="App">
                <div className="modal fade center" id="modalPoll-1" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                    <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
                        <div className="modal-content">
                            <div className="col-lg" >
                                <h2 className="h2-responsive product-name" >
                                    <strong >Completed Services</strong>
                                </h2>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col">

                                        <div className="form-check mb-4">
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
                                            <label className="form-check-label" for="radio-179">Date Completed</label>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Completed;