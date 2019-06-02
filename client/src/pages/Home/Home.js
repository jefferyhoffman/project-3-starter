import React, { Component } from 'react';
import { Button } from 'reactstrap';



import logo from './logo.svg';

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
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/pages/Home.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
              </a>
            <Button color="danger" onClick = {this.handleclick} > Danger!</Button>

            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
          </div>
        </div>
        );
      }
    }
    
export default HomePage;