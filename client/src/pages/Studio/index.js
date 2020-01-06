import React from 'react';
import {MDBRow, MDBCol} from "mdbreact";
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
