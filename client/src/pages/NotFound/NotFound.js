// import React from 'react';
// import { Link } from 'react-router-dom';

// export default () => (
//   <div className='NotFound'>
//     <h1>Oops!</h1>
//     <p>
//       Sorry, the page you requested cannot be found. <Link to='/'>Click
//       here</Link> to return to the home page.
//     </p>
//   </div>
// );


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
