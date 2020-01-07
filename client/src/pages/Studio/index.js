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
        <div className="studioBcg">
        <React.Fragment>
            <IndexNav/>
            <br/>
            <MDBRow>
                <MDBCol size="2"></MDBCol>
                <MDBCol size="8" >
                    <NewCardForm onSubmit={this.handleSubmit}/>
                </MDBCol>
                <MDBCol size="2" id="rightColumn"></MDBCol>
            </MDBRow> 
        </React.Fragment>
        </div>
        )
    }
}

export default Studio;
