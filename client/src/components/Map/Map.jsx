import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Geocode from "react-geocode";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, } from "react-google-maps";
import "./map.css";
import hospitals from "./hospitals.json";


Geocode.setApiKey = `${process.env.REACT_APP_GOOGLE_API_KEY}`

class Map extends Component {

    state = {
        address: '',
        city: '',
        area: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }

    componentDidMount() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position =>{
                this.setState({
                    mapPosition: {
                        lat:position.coords.latitude,
                        lng:position.coords.longitude,
                    },
                    markerPosition: {
                        lat:position.coords.latitude,
                        lng:position.coords.latitude,
                    }

                }, () => {
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
                      .then(response => {
                       console.log('response',response)
                       const address = response.results[0].formatted_address,
                         addressArray = response.results[0].address_components,
                         city = this.getCity(addressArray),
                         area = this.getSnapshotBeforeUpdate(addressArray),
                         state = this.getState(addressArray)

                      this.setState({
                        address: (address) ? address : "",
                        area: (area) ? area : "",
                        city: (city) ? city : "",
                        state: (state) ? state : "",
                    

                    })
            })
            
            
                    
            })
        })
    }
}
                


    getCity = (addressArray) => {
        let city = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]) {
                city = addressArray[index].long_name;
                return city;
            }
        }
    }

    getArea = (addressArray) => {
        let area = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index].types[0]) {
                for (let j = 0; j < addressArray.length; j++) {
                    if ('sublocally_level_1' === addressArray[index].types[j] || 'locality' === addressArray[j].types[j]) {
                        area = addressArray[index].long_name;
                        return area;
                    }
                }
            }
        }
    }

    getState = (addressArray) => {
        let state = '';
        for (let index = 0; index < addressArray.length; index++) {
            for (let index = 0; index < addressArray.length; index++) {
                if (addressArray[index].types[0] && 'administrativ_area_level_1' === addressArray[index].types[0]) {
                    state = addressArray[index].long_name;
                    return state;
                }


            }


        }
    }



    onMarkerDragEnd = (event) => {

        let newLat = event.latlng.lat();
        let newLng = event.latlng.lng();

        Geocode.fromLatLng(newLat, newLng)
            .then(response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getSnapshotBeforeUpdate(addressArray),
                    state = this.getState(addressArray)

                this.setState({
                    address: (address) ? address : "",
                    area: (area) ? area : "",
                    city: (city) ? city : "",
                    state: (state) ? state : "",
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },

                })
            })


        console.log('newlat', newLat)
        console.log('newlng', newLng)
    }

   



    render() {

            const MapWithAMarker = withScriptjs(withGoogleMap(props =>
              <GoogleMap
              defaultZoom={13}
              defaultCenter={{ lat: 35.2271, lng: -80.8431 }}
              >
              

                    
                    <Marker
                        clickable={true}
                        draggable={true}
                        onDragEnd={this.onMarkerDragEnd}
                        // position={{ newLat, newLng}}
                    >
                        <InfoWindow>
                            <div>You are here</div>
                        </InfoWindow>
                    </Marker>

                     





                </GoogleMap>
            ));


            return(
            <MapWithAMarker
                googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD_4YwQwetgH5LeZ80gBw5tU0IJKHP9IJE&libraries=places'
                loadingElement = {< div style = {{ height: `100%` }} />}
                containerElement = {< div style = {{ height: `400px` }} />}
                mapElement = {< div style = {{ height: `100%` }} />}
            />
        );
    }
}

export default Map;









// import React from "react";
// import GoogleMapReact from "google-map-react";
// import LocationPin from "./LocationPin";

// import hospitals from "./hospitals.json";
// import "./map.css";
// import {Marker} from "react-google-maps"






// const Map = ({ location, zoomLevel }) => {
//   const { venues } = hospitals.response;

//   return (
//     <div className="map">
//       <h2 className="map-h2">blah</h2>
//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
//           defaultCenter={location}
//           defaultZoom={zoomLevel}


//         >
//           {venues.map((venue) => (
//             <LocationPin
//               lat={venue.location.lat}
//               lng={venue.location.lng}
//               text={venue.location.address}
//               text={venue.location.title}


//             />
//           ))}
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

// export default Map;














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



