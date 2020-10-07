import React, { Component } from 'react';
import Hero from '../../components/Jumbotron/Jumbotron'
import '../../styles/jumbotron.css'

import Menu from "../Menu/Menu";
import jumping from "../../images/jumping.jpeg";
import Cards from "../../components/Cards/Cards";


class HomePage extends Component {
  render() {
    return (
    
      <div className="wrapper">
        <div className='Home'>
          <Hero />
          <Cards/>
        </div>
      </div>      
  
    );
  }
}

export default HomePage;