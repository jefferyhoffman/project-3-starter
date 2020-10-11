import React from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow,} from "@react-google-maps/api";
import {formatRelative} from "date-fns";

// import useplacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";

// import {Combobox, ComboboxInput,ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox";

import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
    width:'100vw',
    height: "100vh"
};

const center = {
    lat: 35.2271, 
    lng: -80.8431
};

const options = {
    disableDefaultUI:true
}



export default function Clinic(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Map";
    return <div><GoogleMap 
    mapContainerStyle={mapContainerStyle} 
    zoom={11}
    center={center}
    options={options}
    ></GoogleMap></div>;
}


// https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places

























// import React, { useEffect, useRef, } from 'react'
// import useplacesAutocomplete from "use-places-autocomplete";






// console.log(process.env)
// export default function Map({ options, onMount, className }) {
//     const props = { ref: useRef(), className }
//     const onLoad = () => {
//         const map = new window.google.maps.Map(props.ref.current, options)
//         navigator.geolocation.getCurrentPosition(function (position) {
           
//         console.log(position)
//         })

//         onMount && onMount(map)
//     }


//     useEffect(() => {

//         if (!window.google) {
//             const script = document.createElement(`script`)
//             script.type = `text/javascript`
//             script.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`

//             const headScript = document.getElementsByTagName(`script`)[0]
//             headScript.parentNode.insertBefore(script, headScript)
//             script.addEventListener(`load`, onLoad)
//             return () => script.removeEventListener(`load`, onLoad)
//         } else onLoad()


//     })






//     function Search() {
        
//         const{ready, value, suggestions: {status,data}, setValue, clearSuggestion,} = useplacesAutocomplete({
//             requestOptions: {
//                 location: {lat: () => 35.2271, lng: () => -80.8431 },
//                 radius: 200 * 1000,
//             },
//         });
//     }

//     return (
//         <div>
        
//         <
//             div
//             {...props}
//             style
//             ={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }}
//         />
//             <Combobox
//                 onSelect={(address) =>{
//                     console.log(address);
//                 }}>
//                     <ComboboxInput value={value} onChange={}/>
//                 </Combobox>

//         </div>
//     )
// }



// Map.defaultProps = {
//     options: {
//         center: { lat: 35.2271, lng: -80.8431 },
//         zoom: 13,
//     },
// }

