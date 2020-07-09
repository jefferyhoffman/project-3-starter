import React, { useState, useEffect } from 'react'
import Bulma from '@vizuaalog/bulmajs';
import axios from 'axios'



const DropDown = (props) => {

    const [choice, setchoice] = useState(props.choice)
    const [hair, setHair] = useState("")
    const [eye, setEye] = useState("")
    const [glassesQ, setGlassesQ] = useState("")
    const [face, setFace] = useState("")
    const [factQ, setFactQ] = useState("")
    const [quests, setquests] = useState(3)

    useEffect(() => {
        axios.get('/api/characters')
            .then((res) => {
                console.log(res)
                setHair(res.data[choice].hairColor)
                setEye(res.data[choice].eyeColor)
                setGlassesQ(res.data[choice].glasses)
                setFace(res.data[choice].facialHair)
                setFactQ(res.data[choice].fact)

            })
    }, [])



    return (
        <div className="column is-one-quarter">

            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span> Choose Your Question! </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <button className="dropdown-item" onClick={(e) => Bulma().alert({
                            type: "info",
                            title: "My hair color is...",
                            body: hair,
                            confirm: "Okay"
                        })}
                            value="hair">What is my hair color?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                            onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"My eye color is...",
                            body:eye,
                            confirm:"Okay"
                        })}
                            value="eye">What is my eye color?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                            onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"I wear glasses...?",
                            body:glassesQ,
                            confirm:"Okay"
                        })}
                            value="glassesQr">True or False do I wear glasses?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                          onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"I have facial har...?",
                            body:face,
                            confirm:"Okay"
                        })}
                            value="face">True or False do I have faical hair?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                          onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"Here's a random fact about me",
                            body:factQ,
                            confirm:"Okay"
                        })}
                            value="fact">Wanna Know a random fact about me?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown