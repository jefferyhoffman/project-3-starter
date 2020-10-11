import React, { Component } from 'react';
import Hero from '../../components/Jumbotron/Jumbotron'
import '../../styles/jumbotron.css'

import Menu from "../Menu/Menu";
import plants from "../../styles/plants.jpg";
import Cards from "../../components/Cards/Cards";
import HomeButton from '../../components/homeButton/homeButton';

const styles = {
  hero: {
    position: "relative",
    backgroundImage: `url(${plants})`,
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

  }
  
}

class HomePage extends Component {
  render() {
    return (
      <div>
      <div className="wrapper">
        <div className='Home'>
          <Hero />
          < HomeButton />
          <Cards/>
        </div>
      </div>      
  </div>
    );
  }
  }

export default HomePage;