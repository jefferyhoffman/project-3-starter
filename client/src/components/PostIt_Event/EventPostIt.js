import React from "react";

import MoreButton from "../MoreButton/MoreButton";

import "./EventPostIt.css";

const EventPostIt = props => {
  return (
    <div className="EventPostIt ">
      <div>
        <img src={props.event_url} alt="url" className="EventPostIt_img" />
        <h5>{props.event_title}</h5>
        <MoreButton
          type="events"
          id={props._id}
        />
      </div>
    </div>
  );
};

export default EventPostIt;
