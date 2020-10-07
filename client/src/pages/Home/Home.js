import React, { Component } from 'react';
import Hero from '../../components/Jumbotron/Jumbotron'
import '../../styles/jumbotron.css'
import Cards from "../../components/Cards/Cards";




// const styles = {
//   Jumbotron: {
//       // backgroundImage: ,
//       width: "100%"
     
      
//   }
// }

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