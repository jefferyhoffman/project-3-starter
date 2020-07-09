import React, { useState, useEffect } from 'react'
import axios from 'axios'


const questions = [
    {
    text:"Hair Color?"
    },
    {
    text:"Eye Color?"
    },
    {
    text:"Wears Glasses?"
    },
    {
    text:"Has Facial Hair?"
    },
    {
    text:"Cool Fact?"
    },
    ]


//  const DropDown = (props) => {
//      const [choice, setchoice]= useState(props.choice)

//      return(
//         <div className="column is-one-quarter">
//                         <div className="dropdown is-hoverable">
//                             <div className="dropdown-trigger">
//                                 <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu">
//                                     <span> Choose Your Question! </span>
//                                 </button>
//                             </div>
//                             <div className="dropdown-menu" id="dropdown-menu" role="menu">
//                                 <div className="dropdown-content">
//                                     {questions.map((questiontext, value) => 
//                                      <button className="dropdown-item" onClick={e=> console.log(choice)} value="blue">{questiontext.text}</button>
//                                     )}
        
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//      )
//  }
 

const DropDown = (props) => {
   
    const [choice, setchoice]= useState(props.choice)
    const [hair, setHair] = useState("")
    const [eye, setEye] = useState("")
    const [glassesQ, setGlassesQ] = useState("")
    const [face, setFace] = useState("")
    const [factQ, setFactQ] = useState("")

    useEffect(()=> {
        axios.get('/api/characters')
        .then((res) => {
           setHair(res.data[choice].hairColor)
           setEye(res.data[choice].eyeColor)
           setGlassesQ(res.data[choice].glasses)
           setFace(res.data[choice].facialHair)
           setFactQ(res.data[choice].fact)
           
        }).then(()=> {
            console.log(hair) 
            console.log(eye)
            console.log(glassesQ)
            console.log(face)
            console.log(factQ)
            
        })
    }, [])
    
   function handleAnswer () {
       console.log("here")
       
        if (questions[0].text){
            console.log(hair)
            alert(`Hair color is ${hair}`)
        } else if (questions[1].text){
            console.log(eye)
            alert(`Eye color is ${eye}`)
        } else if(questions[2].text){
            console.log(glassesQ)
            alert(`Wears Glasses:  ${glassesQ}`)
        }else if (questions[3].text){
            console.log(face)
            alert(`Has Facial Hair: ${face}`)
        }else if (questions[4].text){
            console.log(factQ)
            alert(`Cool Fact: ${factQ}`)
        } else {
            alert("please choose a question")
        }
            
    }

//  function handleEye(){
//     if (questions[1].text){
//         console.log(eye)
//         alert(`Eye color is ${eye}`)
//     }
//  }


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
                            {questions.map((question) => 
                             <button className="dropdown-item" 
                             onClick={handleAnswer} 
                             value="blue">{question.text}</button>
                            
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default DropDown