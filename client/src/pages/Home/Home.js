import React, { Component } from 'react';
// import { Button } from 'reactstrap';

import logo from './logo.svg';
import id01 from './id-01.jpg';
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
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            
            {/* <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/pages/Home.js</code> and save to reload.
            </p> */}
            <div class="titleSection"><h1>HELLO</h1></div>
            <a
              className='App-link'
              href='https://reactjs.org'
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
              </a>
            {/* <Button color="danger" onClick = {this.handleclick} > Danger!</Button> */}

            <div class="card">
              <img src="./client/src/Home/id-01.jpg" class="card-img-top" alt="product-1"/>
                <div className="card-body">
                  <h5 className="card-title">STORM Kong-X</h5>
                  <img src={id01} className='App-product-1' alt='product-1' />
                  <p className="card-text">The STORM Kong-X watch is a small thin strapped watch that is an effortlessly stylish addition to any wardrobe. 
                  Made from stainless steel this watch combines modern design with the latest trends with its multi-strap of both bangle and mesh.
                  Due to its small nature this is the perfect watch to stack with a statement bracelet. Water resistant to 50m.</p>
                  <a href="/" class="btn btn-primary">Add to Shopping Cart</a>
                </div>
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