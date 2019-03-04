import React from "react";

function ResultsDetail(props) {
  return (
    <div className="text-center">
      
      <h3>Destination: {props.location}</h3>
      <h3>Days of Trip: {props.tripDays}</h3>
      <h3>Trip Description: {props.shortDescription}</h3>
      
      {/* <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /> */}
      {/* do a .map hear that shows all of the images */}

      {/* create a .map that lists all of the items on the itinerary */}
    </div>
  );
}

export default ResultsDetail;