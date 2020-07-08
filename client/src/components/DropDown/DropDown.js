import React, { useState } from 'react'
import axios from 'axios'


const questions = [
    {
    text:"Blue Hair?", value: "blue"
    },
    {
    text:"Red Hair?" , value: "red"
    },
    // {
    // text:"Brown Hair?", value: "brown"
    // },
    // {
    // text:"Gray Hair?", value: "gray"
    // },
    // {
    // text:"Black Hair?", value: "black"
    // },
    // {
    // text:"Wear Glasses?", value: true
    // },
    // {
    // text:"No Glasses?", value: false
    // },
    // {
    // text:"Have Facial Hair?", value: true
    // },
    // {
    // text:"No Facial Hair?", value: false
    // },
    // {
    // text:"Blue Eyes?", value: "blue"
    // },
    // {
    // text:"Hazel Eyes?", value: "hazel"
    // },
    // {
    // text:"Brown Eyes?", value: "brown"
    // },
    // {
    // text:"Green Eyes?", value: "green"
    // },
    // {
    // text:"found $10,000 in a couch?", value: "Found 10 grand in a couch."
    // },
    ]


 const DropDown = (props) => {
     const [choice, setchoice]= useState(props.choice)

     return(
        <div className="column is-one-quarter">
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span> Choose Your Question! </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    {questions.map((questiontext, value) => 
                                     <button className="dropdown-item" onClick={e=> console.log(choice)} value="blue">{questiontext.text}</button>
                                    )}
        
                                </div>
                            </div>
                        </div>
                    </div>
     )
 }
 

// class DropDown extends Component {
//     constructor(){
//         super();
//         this.state={
//         hairQ:"",
//         glassesQ: "",
//         facialhairQ: "",
//         eyeQ: "",
//         factQ: "",
//         qChoice: "",
//         }
//     }
    
//     componentDidMount(){
//         axios.get('/api/characters')
//         .then((res)=>{
//             this.setState({qChoice: Math.floor(Math.random()*9)})
//           this.setState({hairQ: res.data[this.state.qChoice].hairColor})
//           this.setState({glassesQ: res.data[this.state.qChoice].glasses})
//           this.setState({facialhairQ:res.data.facialHair})
//           this.setState({eyeQ:res.data.eyeColor})
//           this.setState({factQ: res.data.fact}) 
//           console.log(res.data)
//           console.log(this.state.hairQ)
//           console.log(this.state.glassesQ)
    
//         })
//     }

//     handleAnswer(){
//         axios.get('/api/characters')
//         .then((res)=>{
//         if (questions[this.state.qChoice].value && this.state.hairQ !== res.data.hairColor){
//             console.log(questions.value)
//             alert("incorrect")
//         } else if (questions.value && this.state.glassesQ !== res.data.glasses){
//             alert("incorrect")
//         } else if (questions.value && this.state.facialhairQ !== res.data.facialHair){
//             alert("incorrect")
//         }else if (questions.value && this.state.eyeQ !== res.data.eyeColor){
//             alert("incorrect")
//         }else if (questions.value && this.state.factQ !== res.data.fact){
//             alert("incorrect")
//         }
            
//     })
//     }
    



//     render() {
//         return (
            
//             <div className="column is-one-quarter">
//                 <div className="dropdown is-hoverable">
//                     <div className="dropdown-trigger">
//                         <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu">
//                             <span> Choose Your Question! </span>
//                         </button>
//                     </div>
//                     <div className="dropdown-menu" id="dropdown-menu" role="menu">
//                         <div className="dropdown-content">
//                             {questions.map((questiontext, value) => 
//                              <button className="dropdown-item" onClick={this.handleAnswer}>{questiontext.text}</button>
//                             )}

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

export default DropDown