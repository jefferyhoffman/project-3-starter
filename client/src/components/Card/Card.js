import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';




class Card extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false,
      guess: "",
      who:"Bob",
      score:10
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
handleScore =()=>{
    if (this.state.score <=0){
        alert("Game Over")
    }
    else{
        this.handleGuess()
    }
}
handleGuess=()=>{
    if(!this.state.guess){
        alert("Make a guess")
    }
    if(this.state.guess.toLocaleLowerCase()===this.state.who.toLocaleLowerCase()){
        this.handleFlip()
        alert(`you scored ${this.state.score}/10`)
    }
    
    else if(this.state.guess && this.state.guess.toLocaleLowerCase !== this.state.who.toLocaleLowerCase()){
        alert("wrong guess score -1")
        let newScore = this.state.score-1
        console.log(newScore)
        this.setState({
            score:newScore
        })
        console.log(this.state.score)
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
 
componentDidMount(){
    const ppl = ["bob","tina","bill","Jimmy","Bart"]
    const choice = Math.round(Math.random()*4)
    this.setState({who:ppl[choice]}) 
    console.log(ppl[choice])
}
  
  render() {
    return (

      <div className="column is-one-quarter">
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="card">
          <h1 className="is-size-1">Who am I?</h1>
          <img alt="bob"src="./mysteryWho1.png" style={{width:"200px",height:"200px"}} ></img>
          <input
           type="text" 
           name="guess"
           value={this.state.guess} 
           onChange={this.handleInputChange} 
           placeholder="Guess here"/>
            <button 
            className="button is-warning" 
            onClick={this.handleScore}>
            Guess
            </button>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
 
        <div className="card">
          <h1 className="is-size-1"> You got it!</h1>
          <img alt="bob"src="http://placekitten.com/200/200" style={{width:"200px",height:"200px"}} ></img>
          
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
      </ReactCardFlip>
      </div> 
    )
  }
}

export default Card;