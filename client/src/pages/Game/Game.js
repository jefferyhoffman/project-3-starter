import React, { Component } from 'react';

import Card from '../../components/Card/Card'

class Game extends Component {
  render() {
    return (
      <div className='container Game'>
         <h1 className='is-size-1 mt-5 mb-6 has-text-centered'> 😺 Let's Guess That Character!!! 😺</h1>
        <div className="columns is -centered">
        {/* <Questions DropDown here --- note needs to be a column within component or put a column here as well. */}
        <Card />
        {/* Score component here---- also needs its own column */}
        </div>
        {/* Options to choose from here -------- needs to be a seperate set of columns(equivalent to a row) and a full sized column.  */}
      </div>
    );
  }
}

export default Game;
