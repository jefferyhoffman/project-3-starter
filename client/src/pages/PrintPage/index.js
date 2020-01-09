import React, {useState, componentDidMount} from 'react';
import './style.css'
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import MoodCardSmall from '../../components/MoodCardSmall'
import PlainJoeSmall from '../../components/PlainJoeSmall'
import MiniColourCard from '../../components/miniColourCard'
import PlainJaneSmall from '../../components/PlainJaneSmall'

const PrintPage = (props) => {
    const [selectedCard, setSelectedCard] = useState(props.location.state.selectedCard)

    const renderCards = (cardNum) =>{
        switch(cardNum){
            case 0:
                return <MiniColourCard className='float-left'/>;
            case 1:
                return <MoodCardSmall className='float-left'/>;
            case 2:
                return <PlainJaneSmall className='float-left'/>;
            case 3:
                return <PlainJoeSmall className='float-left'/>;
        }
    }

    const makeItPrint =() => {
        setInterval(() => {
            window.print()
        }, 2000);
    }
    
    return (
        <div onLoad={makeItPrint()}>
            <React.Fragment>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        {renderCards(selectedCard)}
                        {renderCards(selectedCard)}
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        {renderCards(selectedCard)}
                        {renderCards(selectedCard)}
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        {renderCards(selectedCard)}
                        {renderCards(selectedCard)}
                    </MDBCol>
                </MDBRow>
                <MDBRow id='printPagePadding'>
                    <MDBCol className='d-flex justify-content-center'>
                        {renderCards(selectedCard)}
                        {renderCards(selectedCard)}
                    </MDBCol>
                </MDBRow>

            </React.Fragment>
        </div>
    )
}

export default PrintPage