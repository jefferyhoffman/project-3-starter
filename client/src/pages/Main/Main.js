import React from 'react'
import './Main.css'
import Carousel from '../../components/Carousel/Carousel'
const Main = ()=>{

    return(
      <>
<section className="hero is-fullheight mt-0">
  <div className="hero-body">
   
    <img src='/LetsGuessHomeImg.png'/>
   
  </div>
</section>

      <div className='container'> 
  <div className='columns is-multiline'>
  <div className="column is-half">
  <div className="box rules">
  <div className="box">
      <p className="title">How to Play</p>
      <p className="subtitle">Game Rules</p>
      <ol>
        <li>Each Round is 2 and a half minutes</li>
        <li>Each character is worth up to 10 points!</li>
        <li>Each incorrect guess lowers the worth of your guess</li>
        <li>You can ask preset questions about the character</li>
        <li>Each question asked will lower the character's worth</li>
        <li>Good luck try to reach the top of the Leaderboard! </li>
      </ol>
   
    </div>
    </div>
    
  </div>
  <div className="column is-half">
  <div className="box randomBox">
  <div className="box">
      <h3 className="title"><strong>Let's Guess Developers</strong> </h3>
      <p className="subtitle"><strong>Login to read more about them on Character Page </strong></p>
      
      <Carousel/>
    
    </div>
    </div>
  </div>
  <div className="column">
  <div className="box gifBox">
  <div className="box">
      <p className="title">Demo of Let's Guess</p>
      
      <img src="https://media.giphy.com/media/VDeIViUUouCivqPutt/giphy.gif"/>
    </div>
    </div>
  </div>
  
  </div>
  </div>
 
</>
    )
}

export default Main