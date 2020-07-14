import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import DropDown from '../DropDown/DropDown.js';
import axios from 'axios'
import './TimedCard.css'
import { ScoreContext } from '../../contexts/scoreContext.js';
import { whoContext } from '../../contexts/whoContext'
import { TimeContext } from '../../contexts/Time'
import { FinalScoreContext } from '../../contexts/FinalScore'
import { RandomNumberContext } from '../../contexts/RandomNumber'





const TimedCard = () => {
  const[alertText,setAlertText] = useState(``)
  const { RandomNumber, setRandomNumber } = useContext(RandomNumberContext)
  const { finalScore, incrementFinalScore } = useContext(FinalScoreContext)
  const { Time, setTime } = useContext(TimeContext)
  const { who, updateWho } = useContext(whoContext)
  const { score, setscore } = useContext(ScoreContext)
  const [isFlipped, setisFlipped] = useState(false);
  const [guess, setguess] = useState("");
  const [whoImg, setwhoImg] = useState("");
  const [Chars, setChars] = useState([])
  const [leaderboard, setLeaderboard] = useState([])
  const [lastGuess, setLastGuess] = useState("")      
  const [isActive,setisActive] = useState(true)
  const handleFlip = () => {
    setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  const handleTime = () => {
    if(Time<=0){
      setAlertText("Click start to begin the game")
      
    }
    else{
      handleScore()
    }
  }
  
  const handleScore = () => {
    if (score <= 0) {
      handleGameOver()
      setAlertText("This Character isn't worth anything lets try another one")
      
      updateWho(Math.floor(Math.random() * 27))
    }
    else {
      handleGuess()

    }
  }
  const handleGuess = () => {
    if (!guess) {
      setAlertText("Please type a name to guess!")
      
      
    }
    if (guess.toLowerCase() === who.toLowerCase()) {
      handleFlip()
      setRandomNumber(Math.floor(Math.random() * 27))
      incrementFinalScore(score)
      setLastGuess(whoImg);
      setAlertText("You Guessed correctly!!! Keep going!")
    
      
    }
     if (guess && guess.toLowerCase !== who.toLowerCase()) {
      
      setAlertText(`You guessed wrong you lose a point!`)
      setscore(score-1)
      setguess('')
      document.getElementById("guess").value =""
      
      
    }
  }
  
  useEffect(() => {

    axios.get("/api/characters").then((res) => {
      setChars(res.data)
      setChars(res.data)
      updateWho(res.data[RandomNumber].name)
      setwhoImg(res.data[RandomNumber].picture)
      
    })
    
  }, [])




  const handleGameOver = () => {
    const element = document.getElementById("GObtn");
    element.classList.remove("is-hidden");

  }

  const handlePlayAgain = () => {
    setisFlipped(false)
    const start = document.getElementById("start")
    const element = document.getElementById("GObtn");
    element.classList.add("is-hidden");
    setscore(10)
    newWho()
  }
  const newWho = () => {
    updateWho(Chars[RandomNumber].name)
    setwhoImg(Chars[RandomNumber].picture)
  }
  const handleStart = () => {
  
    setscore(10)
    const start = document.getElementById("start")
    start.classList.add("is-hidden");
    let seconds = 150

    let gameInterval = setInterval(function () {
      seconds--;
      setTime(seconds)
      if (seconds === 0) {
        handleEOG();
        clearInterval(gameInterval)
      }
    }, 1000)

  }
  const handleEOG = () => {
    const element = document.getElementById("MaryPoppins");
    element.classList.remove("is-hidden");

  }
 const handleUserSub = () => {
  const username = document.getElementById("user").value
  
   let highScore = finalScore;
   axios.post('/api/leaderboard', {username, highScore, lastGuess})
   .then ((res)=> {
     console.log(`${username} has been added to leaderboard` )
     setLeaderboard(res.data)	
   })  .then(()=>{
window.location.reload(false)
   })
 }

const handleActive = ()=>{
    setisActive(!isActive)
}
useEffect(()=>{
  handleActive()
},[alertText])
 

  return (

    <div className="column is-4">
   <div className="column is-4">
        <div className={isActive ? "modal is-clipped is-active" : "modal is-clipped"} id="alert">
        <div class="modal-background"></div>
            <div className="modal-card">
            <section className="modal-card-body">
                <p>{alertText}</p>
                <button className="button is-primary" onClick={handleActive}>Continue</button>
            </section>
            </div>
        </div>
    </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="box cardBox">
          <div className="box">
            <button className="button is-primary" id="start" onClick={handleStart}>Start</button>
            <h1 className="is-size-1">Let's Guess! </h1>
            <input className='input' id="guess" type="text" name="guess" value={guess} onChange={e => setguess(e.target.value)} placeholder="Guess here" />
            <button className="button is-warning" onClick={handleTime}>Guess</button>
            <img alt="Who" src="../../assets/images/mysteryWho1.png" style={{ width: "200px", height: "200px" }} ></img>
            <button id="GObtn" className="button is-primary is-hidden" onClick={handlePlayAgain} >Guess Again</button>
            <DropDown />
            <div id="MaryPoppins" className="is-hidden">
              <label>Guess Again to play without submitting score</label>
              <button  className="button is-primary" onClick={handlePlayAgain} >Play Again</button>
              <label>To send score to leaderboard submit your user name below</label>
              <div className="columns">
                <div className="column">
                  <input type="text" id="user" placeholder="Groovy username here"></input>
                  <button className="button is-primary" onClick={handleUserSub}>Submit User</button>
                </div>
              </div>
              <Link className="button is-danger" to="/menu">Return to Menu</Link>
            </div>
          </div>
        </div>

        <div className="box cardBox2">
          <div className="box">
            <h1 className="is-size-1"> You got it!</h1>
            <img alt={who} src={whoImg} style={{ width: "200px", height: "200px" }} ></img>
            <button className="button is-primary" onClick={handlePlayAgain}>Play Again</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )

}
export default TimedCard