import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const NewCardForm = () => {
    return (
        <React.Fragment>
                        <MDBRow>
                <MDBCol>
                    <form>
                        <p className="h5 text-center mb-4">Create a New Card</p>
                        <div className="grey-text text-left">
                            <MDBInput
                                icon="user"
                                label="Your name"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                icon="envelope"
                                label="Your email"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                icon="atlas"
                                label="Your Website"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                icon="pencil-alt"
                                type="textarea"
                                rows="2"
                                label="Your message"
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn outline color="secondary">
                                Send <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>

        </React.Fragment>
    );
};

export default NewCardForm;