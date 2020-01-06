import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import BasicCard from '../../components/BasicCard/Card'
import './style.css'



function Results(){
    return(
        <div className="MainBodyColor">
        <React.Fragment>
            <h1 className="text-white">Results</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBView hover zoom>
                    <MDBCol>
                        <br/>
                        <BasicCard/>
                    </MDBCol>
                    </MDBView>
                    <MDBCol>
                        <br/>
                        <BasicCard/>
                    </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
        </div>
    )
}

export default Results;
