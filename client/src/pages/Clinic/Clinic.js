import React, { Component } from "react";
import { GoogleComponent } from 'react-google-location';
const API_KEY = AIzaSyBp256kwgYBBr80qnJYzumRPq1rGJOV0ek  //need keys//

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    return (
      <div >
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ place: e }) }} />
      </div>
 
    )
  } 
}
 
 
export default HomeComponent;








// class Clinic extends Component {
//     render() {
//       return (
//        <div><h1>These are mental health clinics near your location</h1></div>
//       );
//     }
//   }
  
//   export default Clinic;