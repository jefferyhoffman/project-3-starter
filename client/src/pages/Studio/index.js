import React, { Component } from 'react';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import NewCardForm from "../../components/NewCardForm/NewCardForm.js";
import IndexNav from "../../components/IndexNAV/index.js"
import "./index.css"
import API from '../../lib/API.js';
import AuthContext from '../../contexts/AuthContext'
import { Link, Redirect } from 'react-router-dom';
class Studio extends Component{
    static contextType = AuthContext;

    state = {
        error: "",
        redirectToReferrer: false
    }

    handleSubmit = (newname, company, newemail, website, phonenumber) => {
        if (newname === "" || newemail === "" || website === "" || phonenumber === "") {
            return this.setState({ error: "Please enter your name, email, website and phone number" });
        }

        API.Newcardinfos.create(this.context.authToken, newname, company, newemail, website, phonenumber)
            .then(response => response.data)
            .then(() => {
                this.setState({ redirectToReferrer: true, error: "" })
            })
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/UserDash" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <React.Fragment>
            <div className="studioBcg"></div>
            <IndexNav/>
            <br/>
            <NewCardForm onSubmit={this.handleSubmit}/>
        </React.Fragment>

        )
    }
}

export default Studio;
