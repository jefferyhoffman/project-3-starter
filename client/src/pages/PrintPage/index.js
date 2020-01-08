import React from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import MoodCardSmall from '../../components/MoodCardSmall'


const PrintPage = () => {
    return (
        <div>
            <React.Fragment>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MoodCardSmall className='float-left'/>
                        <MoodCardSmall className='float-left'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MoodCardSmall className='float-left'/>
                        <MoodCardSmall className='float-left'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MoodCardSmall className='float-left'/>
                        <MoodCardSmall className='float-left'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MoodCardSmall className='float-left'/>
                        <MoodCardSmall className='float-left'/>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        </div>
    )
}

export default PrintPage