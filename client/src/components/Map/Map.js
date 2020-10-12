import { functions, isEqual, omit } from 'lodash'
import React, { useState, useEffect, useRef } from 'react'





function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef()
  const [map, setMap] = useState()
  
  
  
  useEffect(() => {
    // The Google Maps API modifies the options object passed to
    // the Map constructor in place by adding a mapTypeId with default
    // value 'roadmap'. { ...options } prevents this by creating a copy.
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, { ...options }))
      navigator.geolocation.getCurrentPosition(function (position) 
    
      
      {
        console.log(position)})
           
    
      if (!window.google) {
      const script = document.createElement(`script`)
      script.src = 
      `https://api.foursquare.com/v2/venues/search?ll=35.2271,-80.8431&categoryId=52e81612bcbc57f1066b7a39&client_id=${process.env.FOURSQUARE_REACT_CLIENT_KEY}&client_secret=${process.env.FOURSQUARE_REACT_SECRET_KEY}&limit=1&v=20180628`
      
      script.src =
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&region=US&language=en`
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])
  
  
  if (map && typeof onMount === `function`) onMount(map, onMountProps)
  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  )
}



function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
  
  
    return noPropChange && noFuncChange
}



export default React.memo(Map, shouldNotUpdate)


Map.defaultProps = {
  options: {
    center: { lat: 35.2271, lng: -80.8431 },
    zoom: 11,
  },
}

