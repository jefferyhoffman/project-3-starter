import React, { useState, useEffect, useContext } from 'react'
import { ScoreContext } from '../../contexts/scoreContext.js';
import axios from 'axios'
import { RandomNumberContext } from '../../contexts/RandomNumber';



const DropDown = () => {
    const [dropActive, setDropActive] =useState(false)
    const [hair, setHair] = useState("")
    const [eye, setEye] = useState("")
    const [glassesQ, setGlassesQ] = useState("")
    const [face, setFace] = useState("")
    const [factQ, setFactQ] = useState("")
    const {score,setscore} = useContext(ScoreContext)
    const {RandomNumber}=useContext(RandomNumberContext)
    const [modalVis, setModalVis]= useState(true)
    const [questText, setQuestText]=useState("Need input")

   

    useEffect(() => {            
                               axios.get('api/characters').then((res)=>{
                                   setHair(res.data[RandomNumber].hairColor)
                                   setEye(res.data[RandomNumber].eyeColor)
                                   setGlassesQ(res.data[RandomNumber].glasses)
                                   setFactQ(res.data[RandomNumber].fact)
                                   setFace(res.data[RandomNumber].facialHair)
                               })
                   }, [RandomNumber])
// sets up toggle
const toggleModalVis = () => {
    setModalVis(!modalVis)
    console.log(modalVis)
}
// sets up event listener
useEffect(()=>{
    toggleModalVis()
},[questText])



    return (
        <div className="column is-one-quarter">
<div className={modalVis ? 'modal is-active' : 'modal'}>
  <div className="modal-background"></div>
  <div className="modal-content">
    <p>{questText}</p>
  </div>
  <button className="button is-info" aria-label="close" onClick={toggleModalVis}>Continue</button>
</div>
            <div className={dropActive ? "dropdown is-up is-active" : "dropdown is-up"} id="drop">
            
                <div className="dropdown-trigger">
                    <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu" 
                    onClick={(e)=>setDropActive(!dropActive)}>
                        <span> Choose Your Question! </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <button className="dropdown-item" onClick={function(e){ setQuestText("my hair color is "+hair);
                        setscore(score -1)}}
                            value="hair">What is my hair color?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                            onClick={function(e){setQuestText("my eye color is  "+eye);
                            setscore(score -1)}}
                            value="eye">What is my eye color?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                            onClick={function(e){setQuestText("Do I wear glasses? ..."+glassesQ);
                            setscore(score-1)}}
                            value="glasses">True or False do I wear glasses?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                          onClick={function (e) {setQuestText(" Do I have facial hair? .... "+face);
                          setscore(score -1)}}
                            value="face">True or False do I have faical hair?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                          onClick={function(e){setQuestText(factQ);
                          setscore(score-1)}}
                            value="fact">Wanna Know a random fact about me?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown