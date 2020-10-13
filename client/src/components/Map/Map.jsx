import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

import hospitals from "./hospitals.json";
import "./map.css";

const styles = {
  mapTitle: {
    fontSize: "60px",
    fontFamily: "'Raleway', serif",
    color: "#8d7183",
    textAlign: "left",
    marginBottom: "60px"
  }

  }

const Map = ({ location, zoomLevel }) => {
  const { venues } = hospitals.response;

  return (
    <div className="map">
      <h2 className="map-h2" style={styles.mapTitle}>Clinics Near Me</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {venues.map((venue) => (
            <LocationPin
              lat={venue.location.lat}
              lng={venue.location.lng}
              text={venue.location.address}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;














// import { functions, isEqual, omit } from 'lodash'
// import React, { useState, useEffect, useRef, componentDidMount } from 'react'
// import Geocode from 'react-geocode';





// function Map({ options, onMount, className, onMountProps }) {
//   const ref = useRef()
//   const [map, setMap] = useState()
  
  
  
//   useEffect(() => {
    
//     const onLoad = () =>
//       setMap(new window.google.maps.Map(ref.current, { ...options }))
//       navigator.geolocation.getCurrentPosition(function(position,street_address){
//         console.log("Latitude is:", position.coords.latitude);
//         console.log("Longitude is:", position.coords.longitude);
//         console.log(position);
//         console.log(street_address)
//       })
      
    
//     if (!window.google) {
//       const script = document.createElement(`script`)
//       script.src =
//         `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        

      
//         document.head.append(script)
//       script.addEventListener(`load`, onLoad)
//       return () => script.removeEventListener(`load`, onLoad)
//     } else onLoad()
//   }, [options])
  
  
//   if (map && typeof onMount === `function`) onMount(map, onMountProps)
  
  
//   return (
//     <div
//       style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
//       {...{ ref, className }}
//     />
//   )
// }


// function shouldNotUpdate(props, nextProps) {
//   const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
//   const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
//   const noFuncChange =
//     funcs.length === nextFuncs.length &&
//     funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
//   return noPropChange && noFuncChange
// }



// export default React.memo(Map, shouldNotUpdate)


// Map.defaultProps = {
//   options: {
//     center: { lat: 35.2271, lng: -80.8431 },
//     zoom: 13,
//     disableDefaultUI:true,

//   },
// }



