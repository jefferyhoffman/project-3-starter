import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import FinalCard from '../../components/FinalCard/index';
import IndexNAV from '../../components/IndexNAV/index';
import './style.css'
import PlainJane from '../../components/PlainJane';

function Finale() {
    return (
        <div className="MainBody">
        <React.Fragment>
            <MDBContainer>
                <MDBRow className="rowPadding">
                    <MDBCol></MDBCol>
                    <MDBCol>
                        <PlainJane />
                    </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
        </div>
    )
}


export default Finale;