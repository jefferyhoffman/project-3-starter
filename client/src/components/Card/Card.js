import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import DropDown from '../DropDown/DropDown.js'



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

      <div className="column is-3">
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
      <div class="tile is-ancestor">
                <div className="tile is-parent">
            <article className="tile is-child box scoreBox">
            <article className="tile is-child box">
        <h1 className="is-size-1">Who am I?</h1>
          
          <img alt="bob"src="https://i.pinimg.com/564x/4f/24/7a/4f247acf992487b5f1d8bdd641f6bd50.jpg" style={{width:"200px",height:"200px"}} ></img>
          <div class="field">
  <div class="control">
   <DropDown/>
          <input
          className='input'
           type="text" 
           name="guess"
           value={this.state.guess} 
           onChange={this.handleInputChange} 
           placeholder="Guess here"/>
           </div>
           </div>
           <div class="buttons has-addons is-centered">
            <button 
            className="button is-centered is-warning" 
            onClick={this.handleScore}>
            <strong>Guess</strong>
            </button>
            </div>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
       </article>
       </article>
       </div>
        </div>


 
        <div class="tile is-ancestor">
                <div className="tile is-parent">
            <article className="tile is-child box scoreBox">
            <article className="tile is-child box">
          <h1 className="is-size-1"> You got it!</h1>
          <img alt="bob"src="http://placekitten.com/200/200" style={{width:"200px",height:"200px"}} ></img>
          
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </article>
        </article>
        </div>
        </div>
      </ReactCardFlip>
      </div> 
    )
  }
}

export default Card;