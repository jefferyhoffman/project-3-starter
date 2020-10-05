import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero'
import HeroButton from '../../components/Button/Button'


class HomePage extends Component {
  render() {
    return (
      
      <div>
      <Hero/>
        <HeroButton/>
    
    <hr className = "solid"></hr>
      </div>
     
    
    );
  }
}

export default HomePage;
