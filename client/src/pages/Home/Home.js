import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import "./style.css"





class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleclick = (event) => { 
    console.log("click")
    let { counter } = this.state
    counter++
    this.setState( { counter })
    console.log(this.state.counter)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="row1">
          
        </div>
        <div className="row" id="row2">
            <div className="col-6" id="row2sec1">
        testing
            </div>
            <div className="col-6" id="row2sec2">
        testing
            </div>
        </div>
        <div className="row" id="row3">
          <div className="col-4" id="row3sec1">

          </div>
          <div className="col-4" id="row3sec2">

          </div>
          <div className="col-4" id="row3sec3">

          </div>
        </div>
        <div className="row" id="row4">
          <div className="col-6" id="row4sec1">

          </div>
          <div className="col-6" id="row4sec2">

          </div>
        </div>

     </div>


      );
    }
}
    
export default HomePage;