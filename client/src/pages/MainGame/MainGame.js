import React, { useState } from 'react';
import Persons from '../../components/Persons/Persons'
import TimedCard from '../../components/TimedCard/TimedCard'
import Score from '../../components/Score/Score'
import AboutMe from '../../components/AboutMe/AboutMe'
import FinalScore from '../../components/FinalScore/FinalScore'
import Timer from '../../components/Timer/Timer'

const MainGame = ()=> {
  
    return (
      <div className='container Game'>
         <h1 className='is-size-1 mt-5 mb-6 has-text-centered'> 😺 Let's Guess That Character!!! 😺</h1>
        <div className="columns is-centered">
        <div className= "column is-2">
            <Timer />
            <FinalScore/>
        </div>
        <TimedCard />
        <Score/>
       </div>
       <br></br>
       <Persons/>
        </div>
    );
}

export default MainGame;