import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';



class Card extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <div className="columns is-centered"><div className="column is-one-quarter" onClick={this.handleClick}>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="card">
          <h1 className="is-size-1">Bob Belcher!</h1>
          <img alt="bob"src="https://i.pinimg.com/564x/49/83/2e/49832e1192afcb2562c51320fd74eba4.jpg" style={{width:"200px",height:"200px"}} ></img>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
 
        <div className="card">
          <h1 className="is-size-1"> It Was him!</h1>
          <img alt="bob"src="http://placekitten.com/200/200" style={{width:"200px",height:"200px"}} ></img>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
      </ReactCardFlip>
      </div> 
      </div>
    )
  }
}

export default Card;