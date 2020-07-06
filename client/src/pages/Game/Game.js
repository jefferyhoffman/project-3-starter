import React from 'react'
import Card from './Card/Card.js'

class Game extends Component {
  render() {
    return (
      <div className='Game'>
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
