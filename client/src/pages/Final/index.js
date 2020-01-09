import React, { Component } from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBBtn, MDBIcon } from "mdbreact";
import PlainJane from '../../components/PlainJane';
import PlainJoe from '../../components/PlainJoe';
import MoodCard from '../../components/MoodCard';
import Colour from '../../components/Colour';
import IndexNAV from '../../components/IndexNAV';


const printPageBtn = () => {
    console.log("something")
}

const Finale = () => {
    return (
        <div className="MainBody">
            <React.Fragment>
                <IndexNAV/>
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
                        <MDBCol>
                            <MDBBtn className='purple-gradient' rounded hover onClick='printBtn()' id='printBtn' onClick='printPageBtn()' href="/PrintPage"><MDBIcon icon="print" /> Print</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>
    )
}


export default Finale;