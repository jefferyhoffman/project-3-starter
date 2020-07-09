import React, { useState, useEffect, useContext } from 'react'
import ReactCardFlip from 'react-card-flip';
import DropDown from '../DropDown/DropDown.js';
import axios from 'axios'
import Bulma from '@vizuaalog/bulmajs';
import { ScoreContext } from '../scoreContext.js';
import {whoContext} from '../whoContext'


const randomnumber = Math.floor(Math.random() * 11)

const Card = () => {

  const {who, updateWho} = useContext(whoContext)
  const {score,decrementScore} = useContext(ScoreContext)
  const [isFlipped, setisFlipped] = useState(false);
  const []=useState(true) 
  const [guess, setguess] = useState("");
  // const [who, setwho] = useState("");
  // const [score, score.setscore] = useState(10);
  const [choice, setchoice] = useState("");
  const [whoImg, setwhoImg] = useState("");



  
  const handleFlip = () => {
    setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  const handleScore = () => {
    if (score <= 0) {
      handleGameOver()
      Bulma().alert({
        type:"danger",
        title:"Game Over",
        body:"you got a game over why not try again",
        confirm:"fine"
      })
    }
    else {
      handleGuess()
      console.log(who)
    }
  }
  const handleGuess = () => {
    if (!guess) {
      Bulma().alert({
        type:"warning",
        title:"Warning",
        body:"Type a name to Guess Who!",
        confirm:"Guess Again"
      })
    }
    if (guess.toLowerCase() === who.toLowerCase()) {
      handleFlip()
      Bulma().alert({
        type:"success",
        title:"You Won!",
        body:` you won your score is ${score} out of 10!!! Nice Job!`,
        confirm:"Hooray!"
      })
    }

    else if (guess && guess.toLowerCase !== who.toLowerCase()) {
      Bulma().alert({
        type:"warning",
        title:"Score Dropped!",
        body:"Guessed Wrong you lost a point! take your time you got this",
        confirm:"Keep Guessing"
      })
      decrementScore(1)
      console.log(score)
    }
  }
  useEffect(() => {
    axios.get("/api/characters").then((res) => {
      setchoice(randomnumber)
      updateWho(res.data[randomnumber].name)
      setwhoImg(res.data[randomnumber].picture)

    })
  }, [])

  const handleGameOver = () => {
    const element = document.getElementById("GObtn");
     element.classList.remove("is-hidden");
    
  }
  
const handlePlayAgain = () => {
  window.location.reload(false);
}


  return (

    <div className="column is-3">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="box">
          <h1 className="is-size-1"> ????</h1>
          <img alt="bob" src="../../assets/images/mysteryWho1.png" style={{ width: "200px", height: "200px" }} ></img>
          <DropDown choice={randomnumber} />
          <input className='input' type="text" name="guess" value={guess} onChange={e => setguess(e.target.value)} placeholder="Guess here" />
          <button className="button is-warning" onClick={handleScore}>Guess</button>
          <button id="GObtn" className="button is-primary is-hidden" onClick={handlePlayAgain} >Play Again</button>
         
          {/* Test button for Game Overs sets Score to 0 */}
          {/* <button onClick={(e)=> score.setscore(score-10)}>Poop</button> */}
          
        </div>

        <div className="box">
          <h1 className="is-size-1"> You got it!</h1>
          <img alt={who} src={whoImg} style={{ width: "200px", height: "200px" }} ></img>
          <button className="button is-primary" onClick={handlePlayAgain}>Play Again</button>
        </div>
      </ReactCardFlip>

    </div>
  )

}
export default Card