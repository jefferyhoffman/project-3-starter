import React, { Component, useState } from 'react';
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

const Finale = (props) => {
    const [selectedCard, setSelectedCard] = useState(props.location.state.selectedCard)
    console.log(selectedCard)

    const handlePrint = (cardId) => {
        props.history.push('/PrintPage', {
            selectedCard: selectedCard
        })
    }

    const renderCards = (cardNum) =>{
        switch(cardNum){
            case 0:
                return <Colour/>;
            case 1:
                return <MoodCard/>;
            case 2:
                return <PlainJane/>;
            case 3:
                return <PlainJoe/>;
        }
    }

    return (
        <div className="MainBody">
            <React.Fragment>
                <IndexNAV/>
                <MDBContainer>
                    <MDBRow className="rowPadding">
                        <MDBCol></MDBCol>
                        <MDBCol>

                            {
                             renderCards(selectedCard)
                            }

                            {/* <Colour/>
                            <br/>
                            <PlainJane />
                            <br/>
                            <PlainJoe />
                            <br />
                            <MoodCard /> */}
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn className='purple-gradient' rounded hover onClick={()=>handlePrint()} id='printBtn'>Print ></MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        </div>
    )
}


export default Finale;