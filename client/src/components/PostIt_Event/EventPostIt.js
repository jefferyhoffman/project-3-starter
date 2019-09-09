import React from "react";
// import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./EventPostIt.css";

const EventPostIt = props => {
  return (
    <div className="EventPostIt ">
      <div>
        <img src={props.event_url} alt="url" className="EventPostIt_img" />
        <h5>{props.event_title}</h5>
        <btn href={props.html_url} className="EventPostIt_btn btn">
          More
          {/* <Link to={`/event/${props.event_id}`} activeClassName="active">
            More  */}
          {/* <EventPostedModal_Btn /> */}
          {/* </Link> */}
        </btn>
      </div>
    </div>
  );
};

export default EventPostIt;
