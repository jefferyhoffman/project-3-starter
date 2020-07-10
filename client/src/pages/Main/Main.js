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
        <li>Select Question from Dropdown</li>
        <li>Read Fact about character</li>
        <li>Choose who it is from character list</li>
        <li>Type in name of character and click submit</li>
        <li>See if your answer is correct</li>
      </ol>
   
    </div>
    </div>
    
  </div>
  <div className="column is-half">
  <div className="box randomBox">
  <div className="box">
      <h3 className="title"><strong>Let's Guess Developers</strong> </h3>
      <p className="subtitle"><strong>Read more about them on the Character Page </strong></p>
      
      <Carousel/>
    
    </div>
    </div>
  </div>
  <div className="column">
  <div className="box gifBox">
  <div className="box">
      <p className="title">Gif of Game</p>
      <p className="subtitle">Gif Below</p>
      <img src="/LetsGuessHomeImg.png"/>
    </div>
    </div>
  </div>
  
  </div>
  </div>
 
</>
    )
}

export default Main