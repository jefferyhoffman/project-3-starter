import React from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import MoodCardSmall from '../../components/MoodCardSmall'


const PrintPage = () => {
    return (
        <div>
            <React.Fragment>
                <MDBRow>
                    <MDBCol className='d-flex justify-content-center'>
                        <p>Don't be so kind</p>
                        <MoodCardSmall />
                        <p>If you say so</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='d-flex justify-content-center'>
                        <p>Don't be so kind</p>
                        <p>If you say so</p>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        </div>
    )
}

export default PrintPage