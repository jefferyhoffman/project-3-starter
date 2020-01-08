import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBIcon, MDBCardImage } from "mdbreact";
import dude from "../../images/final-body.png";
import women from "../../images/women2.png";
import "./style.css";
import API from '../../lib/API';
import AuthContext from "../../contexts/AuthContext";


class PlainJane extends Component {
    static contextType = AuthContext;
    state = {
        isLoading: true,
        error: "",
        newname: "",
        company: "",
        newemail: "",
        website: "",
        phonenumber: ""
    }

    componentDidMount() {
        API.Newcardinfos.getCards(this.context.authToken)
            .then(response => response.data)
            .then(info => this.setState({ info }))
            .catch(err => {
                if (err) {
                    return this.setState({ error: "Error in create card" });
                }
                console.log(err);
            }).finally(() => this.setState({ isLoading: false }));
    }

    render() {
        const { user } = this.context;

        return (
            <React.Fragment>
            <MDBCol>
                <MDBCard id="CardBCGPlainJane" style={{width:"45rem", height: "22.8125rem"}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol>
                                <img src={women} className="img-fluid rounded-circle"/>
                            </MDBCol>
                            <MDBCol>
                                <div>
                                <h2 id="BisJane">{user}</h2>
                                <div id="pFont">
                                <p className="GenPadding text-left" id="NameJane">Company Name: {user}</p>
                                <p className="text-left GenPadding" id="EmailJane">Email:</p>
                                <p className="text-left GenPadding"id="WebsiteJane">Website:</p>
                                <p className="text-left GenPadding"id="phoneJane">Phone:</p>
                                </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </React.Fragment>
        );
    };
};


export default PlainJane;
