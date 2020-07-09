import React, { useState } from 'react';
import Persons from '../../components/Persons/Persons'
import Card from '../../components/Card/Card'

const Game = ()=> {
  
    return (
      <div className='container Game'>
         <h1 className='is-size-1 mt-5 mb-6 has-text-centered'> 😺 Let's Guess That Character!!! 😺</h1>
        <div className="columns is-centered">
        {/* <Questions DropDown here --- note needs to be a column within component or put a column here as well. */}
        <Card />
       </div>
       <br></br>
       <Persons/>
        </div>
    );
}

export default Game;
