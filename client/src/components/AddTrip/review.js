import React, { Component } from "react";



export default class Review extends Component {
      
  state = {
    itins: [],
  };


  componentDidMount(){
    this.setState({
      itins: JSON.parse(localStorage.getItem('Itinerary'))
    });
  }

  render() { 
    return (
     <div className="container" >
      <h4>Review</h4>
        <hr />
        
       <div> Destination: <span/><div className="displayDestination">{localStorage.getItem('Destination')}</div></div>
      
       <div> # of Trip Days: <span/> <div className="displayTripDays">{localStorage.getItem('tripDays')}</div></div>
       
       <div> Trip Description: <span/><div className="displayShortDescription">{localStorage.getItem('shortDescription')}</div></div>
       
       <div> Trip Images: <span/><div className="displayTripImages">{localStorage.getItem('tripImages')}</div></div>
       <div className="displayItinerary">
       <div> Itinerary: <span/>
   
       {this.state.itins.map(itin => (
          <div
            style={{
              background: "white",
              boxShadow: " 0 3px 6px #999, 0 3px 6px #999"
            }} 
             key ={itin.id}
            id = {itin.id}
          > {itin.text}</div>))}
          <br/>
       </div></div>




     </div>
    );
  }
}
