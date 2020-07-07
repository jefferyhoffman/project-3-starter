import React, { Component } from 'react';
import CardLayout from '../../components/CardLayout/CardLayout';
import LeftRail from '../../components/LeftRail/LeftRail';
import './Home.css';

class HomePage extends Component {
  render() {
    return (
      <div className="testing">
        <LeftRail />
        <CardLayout/>
      </div>
    );
  }
}

export default HomePage;


{/* {(window.innerWidth < 2000) && 
          <div>hello</div>
          } */}