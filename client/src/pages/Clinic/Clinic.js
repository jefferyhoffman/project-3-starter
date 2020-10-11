













import React, { useEffect, useRef, } from 'react'






console.log(process.env)
export default function Map({ options, onMount, className }) {
    const props = { ref: useRef(), className }
    const onLoad = () => {
        const map = new window.google.maps.Map(props.ref.current, options)
        navigator.geolocation.getCurrentPosition(function (position) {
           
        console.log(position)
        })

        onMount && onMount(map)
    }


    useEffect(() => {

        if (!window.google) {
            const script = document.createElement(`script`)
            script.type = `text/javascript`
            script.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`

            const headScript = document.getElementsByTagName(`script`)[0]
            headScript.parentNode.insertBefore(script, headScript)
            script.addEventListener(`load`, onLoad)
            return () => script.removeEventListener(`load`, onLoad)
        } else onLoad()


    })







    return (
        <div>
        
        <
            div
            {...props}
            style
            ={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }}
        />

            <input type="text" className="input" placeholder="Search..."/>
        </div>
    )
}



Map.defaultProps = {
    options: {
        center: { lat: 35.2271, lng: -80.8431 },
        zoom: 13,
    },
}

