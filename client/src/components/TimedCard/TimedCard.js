import React, { useState, useEffect, useContext } from 'react'
import ReactCardFlip from 'react-card-flip';
import DropDown from '../DropDown/DropDown.js';
import axios from 'axios'
import Bulma from '@vizuaalog/bulmajs';
import './TimedCard.css'
import { ScoreContext } from '../../contexts/scoreContext.js';
import { whoContext } from '../../contexts/whoContext'
import { TimeContext } from '../../contexts/Time'
import { FinalScoreContext } from '../../contexts/FinalScore'
import { RandomNumberContext } from '../../contexts/RandomNumber'




// const randomnumber = Math.floor(Math.random() * 11)
const TimedCard = () => {

  const { RandomNumber, setRandomNumber } = useContext(RandomNumberContext)
  const { finalScore, incrementFinalScore } = useContext(FinalScoreContext)
  const { Time, setTime } = useContext(TimeContext)
  const { who, updateWho } = useContext(whoContext)
  const { score, setscore } = useContext(ScoreContext)
  const [isFlipped, setisFlipped] = useState(false);
  const [] = useState(true)
  const [guess, setguess] = useState("");
  const [whoImg, setwhoImg] = useState("");
    const [Chars, setChars] = useState([])

    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
      axios.post('/api/leaderboard')
      .then ((res)=> {
        setLeaderboard(res.data)	
      })
      })


  const handleFlip = () => {
    setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  const handleScore = () => {
    if (score <= 0) {
      handleGameOver()
      Bulma().alert({
        type: "danger",
        title: "Oh no!",
        body: "You couldn't guess right this time try guessing again before time runs out!",
        confirm: "fine"
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
        type: "warning",
        title: "Warning",
        body: "Type a name to Guess Who!",
        confirm: "Guess Again"
      })
    }
    if (guess.toLowerCase() === who.toLowerCase()) {
      handleFlip()
      setRandomNumber(Math.floor(Math.random() * 25))
      incrementFinalScore(score)
      Bulma().alert({
        type: "success",
        title: "You Guessed Right! ",
        body: ` you scored  ${score} out of 10!!! Nice Job! Keep Guessing to get more points before time runs out!`,
        confirm: "Hooray!"
      })
    }
    else if (guess && guess.toLowerCase !== who.toLowerCase()) {
      Bulma().alert({
        type: "warning",
        title: "Score Dropped!",
        body: "Guessed Wrong you lost a point! take your time you got this",
        confirm: "Keep Guessing"
      })
      setscore(score - 1)
      console.log(score)
    }
  }
  useEffect(() => {
  
    axios.get("/api/characters").then((res) => {
      setChars(res.data)
      setChars(res.data)
      updateWho(res.data[RandomNumber].name)
      setwhoImg(res.data[RandomNumber].picture)
      console.log("res: " + res.data[RandomNumber])
      console.log(res.data)
    })
    console.log(who)
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
  const newWho=()=>{
    updateWho(Chars[RandomNumber].name)
    setwhoImg(Chars[RandomNumber].picture)
  }
  const handleStart = () => {
    console.log(who)
    console.log(Chars)
    setscore(10)
    const start = document.getElementById("start")
    start.classList.add("is-hidden");
    let seconds = 300

    let gameInterval = setInterval(function () {
      seconds--;
      setTime(seconds)
      if (seconds === 0) {
        handleEOG();
        clearInterval(gameInterval)
      }
    }, 10)

  }
  const handleEOG = () => {
    
    console.log("end of game")
    
    const element1 = document.getElementById("MarryPoppins");
        const element = document.getElementById("GObtn");
    element.classList.remove("is-hidden");
    element1.classList.remove("is-hidden");
    

  }
 const SaveUserName = () => {
  const UserName = document.getElementById("user").value
   console.log(UserName)
 }
 

  return (

    <div className="column is-4">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="box cardBox">
          <div className="box">
            <button className="button is-primary" id="start" onClick={handleStart}>Start</button>
            <h1 className="is-size-1"> ????</h1>
            <img alt="bob" src="../../assets/images/mysteryWho1.png" style={{ width: "200px", height: "200px" }} ></img>
            <DropDown/>
            <input className='input' type="text" name="guess" value={guess} onChange={e => setguess(e.target.value)} placeholder="Guess here" />
            <button className="button is-warning" onClick={handleScore}>Guess</button>
            <button id="GObtn" className="button is-primary is-hidden" onClick={handlePlayAgain} >Guess Again</button>
            <div id="MarryPoppins" className="is-hidden"> 
            <input type="text" placeholder="UserName" id="user"></input>
            <button id="UserNameBtn" className="button is-warning" onClick={SaveUserName} >Submit UserName</button>
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