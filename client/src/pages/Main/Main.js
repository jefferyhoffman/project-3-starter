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
  <div className="column is-one-quarter">
  <article className="tile is-child box rules">
  <article className="tile is-child box">
      <p className="title">How to Play</p>
      <p className="subtitle">Game Rules</p>
      <ol>
        <li>Select Question from Dropdown</li>
        <li>Get three questions and three guesses</li>
        <li>Read Fact about character</li>
        <li>Choose who it is from character list</li>
        <li>Type in name of character and click submit</li>
        <li>See if your answer is correct</li>
      </ol>
   
    </article>
    </article>
  </div>
  <div className="column is-one-half">
  <article className="tile is-child box gifBox">
  <article className="tile is-child box">
      <p className="title">Gif of Game</p>
      <p className="subtitle">Gif Below</p>
      <img src="/LetsGuessHomeImg.png"/>
    </article>
    </article>
  </div>
  <div className="column is-one-quarter">
  <article className="tile is-child box randomBox">
  <article className="tile is-child box">
      <p className="title">Developers of Let's Guess</p>
      
      <Carousel/>
      {/* <p>She Was Involved In a Serious Accident At the Age of 17. Her Political Views Are Based On “Who Is Less Evil?”  
      Denies That Modeling Made Her Stylish. Wore Chicken Suit for 16 Days. 
      The Good Place Is Her First Time As an Actress.</p> */}
    </article>
    </article>
  </div>
  </div>
  </div>
 
</>
    )
}

export default Main