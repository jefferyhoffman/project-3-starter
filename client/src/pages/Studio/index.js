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

    handleSubmit = (name, company, email, website, phoneNum) => {
        if (name === "" || email === "" || website === "" || phoneNum === "") {
            return this.setState({ error: "Please enter your name, email, website and phone number" });
        }

        API.newCards.create(name, company, email, website, phoneNum)
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
