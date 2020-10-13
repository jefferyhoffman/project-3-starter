import googleMapReact from "google-map-react";
import React from "react";

const { InfoBox } = ("react-google-maps/lib/components/addons/InfoBox");

const PinBox = ({ text }) => (
    <div className="pinBox">



        <InfoBox InfoBox={InfoBox} className="info-box"
            defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        
        />
            


    </div>
)
