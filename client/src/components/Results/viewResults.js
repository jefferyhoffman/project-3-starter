import React from "react";
import ResultsDetails from "./resultsDetail"

function ResultList(props) {
  return (
    <ul className="list-group">
     <ResultsDetails 
     destination={this.state.result.destination}
     tripDays={this.state.result.tripDays}
     shortDescription={this.state.result.shortDescription}
    //  do a map above, add area for itinerary or another component.
     />
    {/* go back and look at examples how to put the information in the data below use this for the information below to display the results onto a card */}
      {props.results.map(result => (
       
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      
      ))}
    </ul>
    
  );
}

export default ResultList;