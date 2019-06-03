import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
          <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            HomePage
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
