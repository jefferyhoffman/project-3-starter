import React, { Component } from 'react';
import CardLayout from '../../components/CardLayout/CardLayout';
import LeftRail from '../../components/LeftRail/LeftRail';
import { Image } from "semantic-ui-react";
import './Home.css';

class HomePage extends Component {
  render() {
    return (
      <div className="bgStyle">
        <LeftRail />
        <CardLayout/>
      </div>
    );
  }
}

export default HomePage;