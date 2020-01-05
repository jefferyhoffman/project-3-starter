import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";
import BasicCard from "../../components/BasicCard/Card"
import NewCardForm from "../../components/NewCardForm/NewCardForm.js"




function Studio(){
    return (
        <React.Fragment>
                <MDBRow>
                <MDBCol>
                    <NewCardForm />
                </MDBCol>
                </MDBRow> 
        </React.Fragment>
    )
}

export default Studio;
