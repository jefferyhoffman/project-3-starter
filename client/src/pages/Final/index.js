import React, { Component } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import FinalCard from '../../components/FinalCard/index';
import IndexNAV from '../../components/IndexNAV/index';
import PlainJane from '../../components/PlainJane';
import PlainJoe from '../../components/PlainJoe';
import MoodCard from '../../components/MoodCard';
import Colour from '../../components/Colour';
import API from "../../lib/API";
import AuthContext from "../../contexts/AuthContext";

const Finale = () => {
    return (
        <div className="MainBody">
            <React.Fragment>
                <MDBContainer>
                    <MDBRow className="rowPadding">
                        <MDBCol></MDBCol>
                        <MDBCol>
                            <Colour/>
                            <br/>
                            <PlainJane />
                            <br/>
                            <PlainJoe />
                            <br />
                            <MoodCard />
                        </MDBCol>
                        <MDBCol></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>
    )
}


export default Finale;