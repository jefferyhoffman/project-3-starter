import React from "react";
import EventPostIt from "../components/PostIt_Event/EventPostIt";
import ModalPage from "../components/Events/EventModal";
import API from "../utils/API";
import Navigation from "../components/Navigation/Navigation"
import border from  "../components/Landing/corkborder.png"

class Events extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    API.findAll("events")
      .then(res => {
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    const woodBorder = "url("+border+")"
    return (
      <div className = "container">
        <Navigation/>

      <div style={{
          border: "29px solid transparent",
          backgroundImage:
            "url('https://images.freeimages.com/images/large-previews/c3a/corkboard-1580988.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderImageSource: woodBorder,
          borderImageSlice: "29 29",
          borderImageWidth: "29px 29px",
          height: "100vh"
        }}  className="event-board">
        
        <h1>Upcoming Events</h1>
       
      

        {/*passing getEvents to the add button so it can refresh*/}
        <ModalPage ModalPage={this.props.AddEvent} />

        {!this.state.results.length ? (
          <h1>No Events to Display</h1>
        ) : (
          this.state.results.map(event => {
            return (
              <EventPostIt
                key={event._id}
                event_url={event.event_url}
                event_title={event.event_title}
                event_details={event.event_details}
                event_place={event.event_place}
                html_url={event.html_url}
                _id={event._id}
              />
            );
          })
        )}
      </div>
      </div>
    );
  }
}

export default Events;
