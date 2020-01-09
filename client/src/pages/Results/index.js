import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import MiniColourCard from '../../components/miniColourCard'
import MoodCardSmall from '../../components/MoodCardSmall'
import PlainJaneSmall from '../../components/PlainJaneSmall'
import PlainJoeSmall from '../../components/PlainJoeSmall'
import IndexNav from "../../components/IndexNAV/index.js"
import './style.css'


function Results() {
    return (
        <div className="MainBodyColor">
            <React.Fragment>
                <IndexNav/>
                <h1 className="text-white">Choose a Template</h1>
                <MDBContainer>
                    <MDBRow className="rowPadding">
                        <MDBCol>

                        </MDBCol>
                        <MDBView hover zoom waves>
                                <MiniColourCard className='resultsColourCard' />
                        </MDBView>
                        <MDBView hover zoom>
                                <MoodCardSmall />
                        </MDBView>
                        <MDBCol></MDBCol>
                    </MDBRow>
                    <MDBRow className="rowPadding">
                        <MDBCol></MDBCol>
                        <MDBView hover zoom>
                                <PlainJaneSmall />
                        </MDBView>
                        <MDBView hover zoom>
                                <PlainJoeSmall />
                        </MDBView>
                        <MDBCol></MDBCol>
                    </MDBRow>
                </MDBContainer>
                <p className="text-white rowPadding">Click A card to expand the designs</p>
            </React.Fragment>
        </div>
    )
}
export default Results;
