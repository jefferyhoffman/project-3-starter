import React, { Component } from 'react';
import Hero from '../../components/Jumbotron/Jumbotron'
import '../../styles/jumbotron.css'

import Menu from "../Menu/Menu";
import jumping from "../../images/jumping.jpeg";
import Cards from "../../components/Cards/Cards";
import HomeButton from '../../components/homeButton/homeButton';


class HomePage extends Component {
  render() {
    return (
    <section>
      <div className="wrapper">
        <div className='Home'>
          <Hero />
          < HomeButton />
          <Cards/>
        </div>
      </div>      
  </section>
    );
  }
}

export default HomePage;