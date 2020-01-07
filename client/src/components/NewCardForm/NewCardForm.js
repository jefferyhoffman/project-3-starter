import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import "./index.css"


const createCard = e => {
    console.log("hi")
}

class NewCardForm extends Component {
    state = {
        name: "",
        company: "",
        email: "",
        website: "",
        phoneNum: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        const { name, company, email, website, phoneNum } = this.state;

        this.props.onSubmit(name, company, email, website, phoneNum);
        console.log(name, company, email, website, phoneNum);
        event.preventDefault();
    }

    render() {
        const { newname, company, newemail, website, phonenumber } = this.state;
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <form>
                                <p className="h4 text-center py-4">Fill in the information you would like on your card</p>
                                <div className="grey-text text-left">
                                    <MDBInput
                                        label="Name"
                                        name="name"
                                        value={newname}
                                        onChange={this.handleInputChange}
                                        group
                                        icon="user"
                                        type="text"
                                        validate
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
                                        name="email"
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
                                        name="phoneNum"
                                        value={phonenumber}
                                        onChange={this.handleInputChange}
                                        icon="phone"
                                        group
                                        type="text"
                                        validate
                                        />
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn color="orange" rounded type="submit">
                                        Create Card
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