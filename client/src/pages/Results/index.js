import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import BasicCard from '../../components/BasicCard/Card'
import './style.css'



function Results() {
    return (
        <div className="MainBodyColor">
            <React.Fragment>
                <h1 className="text-white">Choose a Template</h1>
                <MDBContainer>
                    <MDBRow className="rowPadding">
                        <MDBCol></MDBCol>
                        <MDBView hover zoom>
                            <MDBCol>
                                <BasicCard />
                            </MDBCol>
                        </MDBView>
                        <MDBView hover zoom>
                            <MDBCol>
                                <BasicCard />
                            </MDBCol>
                        </MDBView>
                        <MDBCol></MDBCol>
                    </MDBRow>
                    <MDBRow className="rowPadding">
                        <MDBCol></MDBCol>
                        <MDBView hover zoom>
                            <MDBCol>
                                <BasicCard />
                            </MDBCol>
                        </MDBView>
                        <MDBView hover zoom>
                            <MDBCol>
                                <BasicCard />
                            </MDBCol>
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
