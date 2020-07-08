import React, { Component } from 'react'
import MyContext from './Context'




class Provider extends Component {

    state = {
        guess: "",
        who: "",
        score: 10,
        Chars: [],
        choice: '',
        whoImg: ''
    }

    render() {

        return (
            <MyContext.Provider value={{
                state: this.state,
                handleGuess: () => {
                    if (!this.state.guess) {
                        alert("Make a guess")
                    }
                    if (this.state.guess.toLocaleLowerCase() === this.state.who.toLocaleLowerCase()) {
                        this.handleFlip()
                        alert("You scored "+this.state.score+" out of 10")
                        
                    }

                    else if (this.state.guess && this.state.guess.toLocaleLowerCase !== this.state.who.toLocaleLowerCase()) {
                        alert("wrong guess score -1")
                        let newScore = this.state.score - 1
                        console.log(newScore)
                        this.setState({
                            score: newScore
                        })
                        console.log(this.state.score)
                    }
                },
                handleInputChange: (event) => {
                    // Getting the value and name of the input which triggered the change
                    const { name, value } = event.target;

                    // Updating the input's state
                    this.setState({
                        [name]: value
                    });
                },
                handleScore: () => {
                    if (this.state.score <= 0) {
                        alert("Game Over")
                    }
                    else {
                        this.handleGuess()
                        console.log("poop")
                    }
                },
                handleFlip() {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    
  }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )

    }

}
export default Provider