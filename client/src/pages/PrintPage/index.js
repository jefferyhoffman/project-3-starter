import React from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import MoodCardSmall from '../../components/MoodCardSmall'
import PlainJoeSmall from '../../components/PlainJoeSmall'
import MiniColourCard from '../../components/miniColourCard'
import PlainJaneSmall from '../../components/PlainJaneSmall'

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
                        <PlainJoeSmall className='float-left'/>
                        <PlainJoeSmall className='float-left'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MiniColourCard className='float-left'/>
                        <MiniColourCard className='float-left'/>
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        <PlainJaneSmall className='float-left'/>
                        <PlainJaneSmall className='float-left'/>
                    </MDBCol>
                </MDBRow>

            </React.Fragment>
        </div>
    )
}

export default PrintPage