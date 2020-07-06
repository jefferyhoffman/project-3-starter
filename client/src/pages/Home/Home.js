import React, { Component } from 'react';
import CardLayout from '../../components/CardLayout/CardLayout';
import LeftRail from '../../components/LeftRail/LeftRail';
// import IngredientDropdown from '../../components/IngredientDropdown/IngredietDropdown'
import './Home.css';

class HomePage extends Component {
  render() {
    return (
      <div className="testing">
        <LeftRail />
        {/* <IngredientDropdown /> */}
        <CardLayout/>
      </div>
    );
  }
}

export default HomePage;
