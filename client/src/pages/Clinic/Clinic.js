import React from 'react'
import Map from '../../components/Map/Map'


export default () => (
  <>
    <h1>Google Maps</h1>
    <Map /> 
  </>
)
























// import React, { useEffect, useRef, useState } from 'react'

// console.log(process.env)
// export default function Map({ options, onMount, className, onMountProps }) {
//   const ref = useRef()
//   const [map, setMap] = useState()
  
  
  
//   useEffect(() => {
//     const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    
    
    
//     if (!window.google) {
//       const script = document.createElement(`script`)
//       script.src =`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    
//       document.head.append(script)
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


// Map.defaultProps = {
//   options: {
//     center: { lat: 48, lng: 8 },
//     zoom: 5,
//   },
// }



















// import React, { useEffect, useRef, } from 'react'


// // import {Marker,} from "google-maps-react";


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



    
//         return (
//             <div>

              
               
            
//             <
//                 div
//                 {...props}
//                 style
//                 ={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }}
//             />
                
    
//             </div>
//         )
//     }



    



// Map.defaultProps = {
//     options: {
//         center: { lat: 35.2271, lng: -80.8431 },
//         zoom: 13,
//     },
// }











