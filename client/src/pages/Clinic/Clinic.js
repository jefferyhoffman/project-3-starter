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









// import React from 'react';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
// } from "react-google-maps";



// import { Component, useState } from 'react';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//   } from "react-google-maps";

//   const Clinic = props =>{
//     const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//       <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//       >
//         <Marker
//           position={{ lat: -34.397, lng: 150.644 }}
//         />
//       </GoogleMap>
//     ))
//     return(
//         <>
//       <MapWithAMarker
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//       </>
//     )
//   }

// const Clinic = withScriptjs(withGoogleMap((props) => {

//     const [address, setAddress] = useState("")
//     return (
//         <GoogleMap
//             defaultZoom={8}
//             defaultCenter={{ lat: -34.397, lng: 150.644 }}
//         >
//             {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//         </GoogleMap>



// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//     <GoogleMap
//         defaultZoom={8}
//         defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//         <Marker
//             position={{ lat: -34.397, lng: 150.644 }}
//         />
//     </GoogleMap>
// ));


// return (

//     <MapWithAMarker
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkjKtkKSeldM9LJo6xy3E3L0IEYIBV96M&v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `400px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//     />



// );
//     )
// }))
import React, { useEffect, useRef } from 'react'

export default function Map({ options, onMount, className }) {
    const props = { ref: useRef(), className }
    const onLoad = () => {
        const map = new window.google.maps.Map(props.ref.current, options)
        onMount && onMount(map)
    }

    useEffect(() => {
       
        if (!window.google) {
            const script = document.createElement(`script`)
            script.type = `text/javascript`
            script.src = `https://maps.google.com/maps/api/js?key=` + 
            process.env.GOOGLE_MAPS_API_KEY

            const headScript = document.getElementsByTagName(`script`)[0]
            headScript.parentNode.insertBefore(script, headScript)
            script.addEventListener(`load`, onLoad)
            return () => script.removeEventListener(`load`, onLoad)
        } else onLoad()
    })

    return (

        <
            div
            {...props}
            style
            ={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }}
        />

    )
}

Map.defaultProps = {
    options: {
        center: { lat: 48, lng: 8 },
        zoom: 5,
    },
    onMount: addMarkers()
}

export default Clinic;
