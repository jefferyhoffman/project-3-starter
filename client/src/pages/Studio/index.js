import React, { Component } from 'react';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import NewCardForm from "../../components/NewCardForm/NewCardForm.js";
import IndexNav from "../../components/IndexNAV/index.js"
import "./index.css"
import API from '../../lib/API.js';

class Studio extends Component{
    state = {
        error: ""
    }

    handleSubmit = (newname, company, newemail, website, phonenumber) => {
        if (newname === "" || newemail === "" || website === "" || phonenumber === "") {
            return this.setState({ error: "Please enter your name, email, website and phone number" });
        }

        API.newCards.create(newname, company, newemail, website, phonenumber)
            .then(response => response.data)
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
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
