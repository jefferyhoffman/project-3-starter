import React from 'react'
import './Main.css'
const Main = ()=>{

    return(
      <>
<section className="hero is-fullheight">
  <div className="hero-body">
    <div className="container">
    <img src='/LetsGuessHomeImg.png'
    
   />
    </div>
  </div>
</section>

      <div className='container'> 
  <div className='columns is-multiline'>
  <div class="column is-one-quarter">
  <article class="tile is-child box rules">
  <article class="tile is-child box">
      <p class="title">How to Play</p>
      <p class="subtitle">Game Rules</p>
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
  <div class="column is-one-half">
  <article class="tile is-child box gifBox">
  <article class="tile is-child box">
      <p class="title">Gif of Game</p>
      <p class="subtitle">Gif Below</p>
    </article>
    </article>
  </div>
  <div class="column is-one-quarter">
  <article class="tile is-child box randomBox">
  <article class="tile is-child box">
      <p class="title">Random Fact</p>
      <p class="subtitle">Jameela Jamil (CharacterNameHere)</p>
      <p>She Was Involved In a Serious Accident At the Age of 17. Her Political Views Are Based On “Who Is Less Evil?”  
      Denies That Modeling Made Her Stylish. Wore Chicken Suit for 16 Days. 
      The Good Place Is Her First Time As an Actress.</p>
    </article>
    </article>
  </div>
  </div>
  </div>
 
</>
    )
}

export default Main