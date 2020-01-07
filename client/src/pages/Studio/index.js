import React from 'react';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import NewCardForm from "../../components/NewCardForm/NewCardForm.js";
import IndexNav from "../../components/IndexNAV/index.js"
import "./index.css"




function Studio(){
    return (
        
        <React.Fragment>
        <div className="studioBcg"></div>
        <IndexNav/>
            <br/>
           
                    <NewCardForm />
        
        </React.Fragment>
     
    )
}

export default Studio;
