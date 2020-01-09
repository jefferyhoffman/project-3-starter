import React from 'react';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import NewCardForm from "../../components/NewCardForm/NewCardForm.js";
import IndexNav from "../../components/IndexNAV/index.js"
import "./index.css"




function Studio(){
    return (
        <div className="studioBcg">
        <React.Fragment>
        <IndexNav/>
            <br/>
            <MDBRow>
                <MDBCol size="2"></MDBCol>
                <MDBCol size="8" >
                    <NewCardForm />
                </MDBCol>
                <MDBCol size="2" id="rightColumn"></MDBCol>
                </MDBRow> 
        </React.Fragment>
        </div>
    )
}

export default Studio;
