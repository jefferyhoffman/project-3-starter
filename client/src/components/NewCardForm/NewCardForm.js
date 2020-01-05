import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const NewCardForm = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Fill in the information you would like on your card</p>
                                <div className="grey-text text-left">
                                    <MDBInput
                                        label="Your Name"
                                        group
                                        icon="user"
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Company Name (optional)"
                                        group
                                        icon="building"
                                        type="text"
                                        error="wrong"
                                        success="right"
                                    />

                                    <MDBInput
                                        label="Your Email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Website"
                                        icon="atlas"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Phone"
                                        icon="phone"
                                        group
                                        type="text"
                                        validate
                                    />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="orange" type="submit">
                                        Register
                  </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default NewCardForm;