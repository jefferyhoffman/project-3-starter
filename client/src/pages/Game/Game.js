import React, { useState } from 'react';
import Persons from '../../components/Persons/Persons'
import Card from '../../components/Card/Card'
import Score from '../../components/Score/Score'
import AboutMe from '../../components/AboutMe/AboutMe'

const Game = ()=> {
  
    return (
      <div className='container Game'>
         <h1 className='is-size-1 mt-5 mb-6 has-text-centered'> 😺 Let's Guess That Character!!! 😺</h1>
        <div className="columns is-centered">
        <AboutMe/>
        <Card />
        <Score/>
       </div>
       <br></br>
       <Persons/>
        </div>
    );
}

export default Game;
