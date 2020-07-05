import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';



class Card extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false,
      guess: "",
      who:"Bob"
    };
    // ===this is needed if we want a click event on a button to flip=====
    // this.handleClick = this.handleClick.bind(this);
  }
//  =====this is how the defualt react flip handles flip events
//   handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }
handleFlip() {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  handleGuess=()=>{
    if(!this.state.guess){
        alert("Make a guess")
    }
    if(this.state.guess.toLocaleLowerCase()===this.state.who.toLocaleLowerCase()){
        this.handleFlip()
    }
    else if(this.state.guess && this.state.guess.toLocaleLowerCase !== this.state.who.toLocaleLowerCase()){
        alert("wrong guess score -1")
    }
    }
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
 
  render() {
    return (
      <div className="column is-one-quarter">
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="card">
          <h1 className="is-size-1">Bob Belcher!</h1>
          <img alt="bob"src="https://i.pinimg.com/564x/49/83/2e/49832e1192afcb2562c51320fd74eba4.jpg" style={{width:"200px",height:"200px"}} ></img>
          <input
           type="text" 
           name="guess"
           value={this.state.guess} 
           onChange={this.handleInputChange} 
           placeholder="Guess here"/>
            <button 
            className="button is-warning" 
            onClick={this.handleGuess}>
            Guess
            </button>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
 
        <div className="card">
          <h1 className="is-size-1"> It Was him!</h1>
          <img alt="bob"src="http://placekitten.com/200/200" style={{width:"200px",height:"200px"}} ></img>
          
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
      </ReactCardFlip>
      </div> 
    )
  }
}

export default Card;