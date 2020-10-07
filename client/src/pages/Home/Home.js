import React, { Component } from 'react';
import Hero from '../../components/Jumbotron/Jumbotron'
import '../../styles/jumbotron.css'
import Menu from "../Menu/Menu";
import jumping from "../../images/jumping.jpeg";
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
      <body className="wrapper">
      <div classNameName='Home'>
      <Hero />
      <Cards/>
     
      </div>
      </body>
    );
  }
}

export default HomePage;