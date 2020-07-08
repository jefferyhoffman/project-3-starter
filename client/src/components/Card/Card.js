import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import DropDown from '../DropDown/DropDown.js';
import axios from 'axios'
import Answers from '../Answers/Answers'
import Score from '../Score/Score.js'

const randomnumber = Math.floor(Math.random() * 10)

const Card = () => {

  const [isFlipped, setisFlipped] = useState(false);
  const [guess, setguess] = useState("");
  const [who, setwho] = useState("");
  const [score, setscore] = useState(10);
  const [choice, setchoice] = useState("");
  const [whoImg, setwhoImg] = useState("");

  const handleFlip = () => {
    setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  const handleScore = () => {
    if (score <= 0) {
      alert("Game Over")
    }
    else {
      handleGuess()
      console.log(who)
      console.log(choice)
    }
  }
  const handleGuess = () => {
    if (!guess) {
      alert("Make a guess")
    }
    if (guess.toLowerCase() === who.toLowerCase()) {
      handleFlip()
      alert(`you scored ${score}/10`)
    }

    else if (guess && guess.toLowerCase !== who.toLowerCase()) {
      alert("wrong guess score -1")
      setscore(score - 1)
      console.log(score)
    }
  }
  useEffect(() => {
    axios.get("/api/characters").then((res) => {
      setchoice(randomnumber)
      setwho(res.data[randomnumber].name)
      setwhoImg(res.data[randomnumber].picture)

    }).then(() => {
      console.log("Choice: " + choice)
      console.log("who: " + who)
    })
  }, [])


  return (

    <div className="column is-3">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="box">
          <h1 className="is-size-1"> ????</h1>
          <img alt="bob" src="../../assets/images/mysteryWho1.png" style={{ width: "200px", height: "200px" }} ></img>
          <DropDown choice={randomnumber} />
          <input className='input' type="text" name="guess" value={guess} onChange={e => setguess(e.target.value)} placeholder="Guess here" />
          <button className="button is-warning" onClick={handleScore}>Guess</button>
        </div>

        <div className="box">
          <h1 className="is-size-1"> You got it!</h1>
          <img alt={who} src={whoImg} style={{ width: "200px", height: "200px" }} ></img>
        </div>
      </ReactCardFlip>

    </div>
  )

}
export default Card