import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import "./index.css"


const createCard = e => {
    console.log("hi")
}

class NewCardForm extends Component {
    state = {
        newname: "",
        company: "",
        newemail: "",
        website: "",
        phonenumber: "",
        image: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        const { newname, image, company, newemail, website, phonenumber } = this.state;

        this.props.onSubmit(newname, image, company, newemail, website, phonenumber);
        console.log(newname, image, company, newemail, website, phonenumber);
        event.preventDefault();
    }

    render() {
        const { newname, image, company, newemail, website, phonenumber } = this.state;
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center py-4">Fill in the information you would like on your card</p>
                                <div className="grey-text text-left">
                                {/* <MDBInput
                                    name="image"
                                    className="file-path validate"
                                    value={image}
                                    onChange={this.handleInputChange}
                                    group
                                    rounded
                                    icon="file"
                                    type="file"
                                    placeholder="Upload Your Image"
                                    error="wrong"
                                    success="right"
                                /> */}
                                <div class="file-field">
                                    <a class="btn btn-rounded purple-gradient">
                                        <i class="fas fa-paperclip" aria-hidden="true"></i>
                                        <input type="file" />
                                    </a>
                                    <div class="file-path-wrapper">
                                        <p class="file-path validate">Upload an Image</p>
                                    </div>
                                </div>
                                <MDBInput
                                        label="Name to be displayed on the card"
                                        name="newname"
                                        value={newname}
                                        onChange={this.handleInputChange}
                                        group
                                        icon="user"
                                        type="text"
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Company Name (optional)"
                                        name="company"
                                        value={company}
                                        onChange={this.handleInputChange}
                                        group
                                        icon="building"
                                        type="text"
                                        error="wrong"
                                        success="right"
                                    />

                                    <MDBInput
                                        label="Email (doesn't have to be sign in email)"
                                        name="newemail"
                                        value={newemail}
                                        onChange={this.handleInputChange}
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
                                    <MDBInput
                                        label="Website"
                                        name="website"
                                        value={website}
                                        onChange={this.handleInputChange}
                                        icon="atlas"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
                                    <MDBInput
                                        label="Phone"
                                        name="phonenumber"
                                        value={phonenumber}
                                        onChange={this.handleInputChange}
                                        icon="phone"
                                        group
                                        type="number"
                                        validate
                                        />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="orange" rounded type="submit">
                                        Create Cards
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        );
    }
};

export default NewCardForm;