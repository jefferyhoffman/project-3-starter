import React  from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView } from "mdbreact";
import MiniColourCard from '../../components/miniColourCard'
import MoodCardSmall from '../../components/MoodCardSmall'
import PlainJaneSmall from '../../components/PlainJaneSmall'
import PlainJoeSmall from '../../components/PlainJoeSmall'
import IndexNav from "../../components/IndexNAV/index.js"
import './style.css'


function Results(props) {

    const handleClick = (cardId) => {
        props.history.push('/Final', {
            selectedCard: cardId
        })
    }



    return (
        <div className="MainBodyColor">
            <React.Fragment>
                <IndexNav/>
                <h1 className="text-white">Choose a Template</h1>
                <MDBContainer>
                    <MDBRow className="rowPadding">
                        <MDBCol>

                        </MDBCol>
                        <MDBView hover zoom waves onClick={()=>handleClick(0)}>
                                <MiniColourCard className='resultsColourCard'/>
                        </MDBView>
                        <MDBView hover zoom waves onClick={()=>handleClick(1)}>
                                <MoodCardSmall />
                        </MDBView>
                        <MDBCol></MDBCol>
                    </MDBRow>
                    <MDBRow className="rowPadding">
                        <MDBCol></MDBCol>
                        <MDBView hover zoom waves onClick={()=>handleClick(2)}>
                                <PlainJaneSmall />
                        </MDBView>
                        <MDBView hover zoom waves onClick={()=>handleClick(3)}>
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
