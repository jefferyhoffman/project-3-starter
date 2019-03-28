import React, { Component } from "react";
import axios from "axios";

export default class Review extends Component {

  state = {
    location: localStorage.getItem('Destination'),
    trip_length: localStorage.getItem('tripDays'),
    itinerary: JSON.parse(localStorage.getItem('Itinerary')),
    description: localStorage.getItem('shortDescription'),
    images: JSON.parse(localStorage.getItem('images'))
  };


  componentDidMount() {
    this.setState({
      itinerary: JSON.parse(localStorage.getItem('Itinerary'))
    });
  }

  handlePost() {
    let data = {
      user: localStorage.getItem('token'),
      location: localStorage.getItem('Destination'),
      trip_length: localStorage.getItem('tripDays'),
      itinerary: JSON.parse(localStorage.getItem('Itinerary')),
      description: localStorage.getItem('shortDescription'),
      images: JSON.parse(localStorage.getItem('images'))
    }

    axios({
      method: 'POST',
      url: '/api/trips',
      data: data
    })
      .then(function (response) {
        console.log(response);
        localStorage.clear();
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container" >
        <div className="hopefully" style={{ boxShadow: "5px 5px 5px 5px #999" }}>
          <h4>Review</h4>
          <hr />

          <div> Destination: <span /><div value="location" className="displayDestination">{localStorage.getItem('Destination')}</div></div>

          <div> # of Trip Days: <span /> <div value="trip_length" className="displayTripDays">{localStorage.getItem('tripDays')}</div></div>

          <div> Trip Description: <span /><div value="description" className="displayShortDescription">{localStorage.getItem('shortDescription')}</div></div>

          <div> Trip Images: <span /><div value="images" className="displayTripImages">{localStorage.getItem('tripImages')}</div></div>
          <div className="displayItinerary">
            <div> Itinerary: <span />

              {this.state.itinerary.map(itin => (
                <div
                  value="itinerary"
                  style={{
                    background: "white",
                    boxShadow: " 0 3px 6px #999, 0 3px 6px #999"
                  }}
                  key={itin.id}
                  id={itin.id}
                > {itin.text} <br /> </div>))}
            </div>
          </div>
          <button onClick={this.handlePost} className="tripComplete-btn btn">Approve</button>
        </div>
      </div>
    );
  }
}
