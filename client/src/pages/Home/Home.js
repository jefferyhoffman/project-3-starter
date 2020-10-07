import React, { Component } from 'react';
import logo from './logo.svg';
import Hero from '../../components/Jumbotron/Jumbotron'
import '../../styles/jumbotron.css'
import jumping from "../../images/jumping.jpeg";
import menu from "../Menu/Menu";



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
     
      </div>
      </body>
    );
  }
}

export default HomePage;