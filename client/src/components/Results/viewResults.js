import React from "react";
import ResultsDetails from "./resultsDetail"

function ResultList(props) {
  return (
    <ul className="list-group">
     <ResultsDetails 
     destination={this.state.results.location}
     tripDays={this.state.results.trip_length}
     shortDescription={this.state.results.description}
    //  do a map above, add area for itinerary or another component.
     />
    {/* go back and look at examples how to put the information in the data below use this for the information below to display the results onto a card */}
      {props.results.map(result => (
       
        <li className="list-group-item" key={result.id}>
          <img alt={result.location} className="img-fluid" src={result.images.original.url} />
        </li>
      
      ))}
    </ul>
    
  );
}

export default ResultList;