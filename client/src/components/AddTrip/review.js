import React, { Component } from "react";


export default class Review extends Component {

              destination = localStorage.getItem('destination')


  render() {
    return (
     <div className="container">
      <h4>Review</h4>
        <hr />
        {this.state.destination}

     </div>
    );
  }
}