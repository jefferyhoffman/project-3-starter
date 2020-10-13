import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";





const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon"
      defaultClickable={true}
      defaultDraggable={true}
      defaultVisible={false}
    />

  </div>
);

export default LocationPin;
