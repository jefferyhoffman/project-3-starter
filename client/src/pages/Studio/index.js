import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";
import BasicCard from "../../components/BasicCard/Card"




function Studio(){
    return (
        <React.Fragment>
                <MDBRow>
                <MDBCol>
                    <BasicCard/>
                </MDBCol>
                </MDBRow> 
        </React.Fragment>
    )
}

export default Studio;
