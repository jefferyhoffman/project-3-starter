// import React, { Component } from "react";
// import { GoogleComponent } from 'react-google-location';
// import "./clinic.css";





// const API_KEY = "AIzaSyBp256kwgYBBr80qnJYzumRPq1rGJOV0ek";  //need keys//
// const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + API_KEY;


// class Clinic extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       place: null,
//     };
//   }

//   render() {
//     return (
//       <div >
//          <GoogleComponent

//           apiKey={URL}
//           language={'en'}
//           country={'country:us'}
//           coordinates={true}
//           locationBoxStyle={'custom-style'}
//           locationListStyle={'custom-style-list'}
//           onChange={(e) => { this.setState({ place: e }) }} />
//       </div>


//     )
//   } 
// }


// export default Clinic;









import {Component} from 'react';
import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";


class Clinic extends Component {
    render() {

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                />
            </GoogleMap>
        ));


        return (

            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkjKtkKSeldM9LJo6xy3E3L0IEYIBV96M&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />



        );
    }
}

export default Clinic;