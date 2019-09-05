import React from "react";
import PostIt from "../components/Layout/PostIt";
import ModalPage from "../components/Event/EventModal";
// import AddEvent from './components/??';
import API from "../utils/API";

class Events extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    API.findAll("events")
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="event-board">
        <h1>Upcoming Events</h1>
        {/*passing getEvents to the add button so it can refresh*/}
        <ModalPage ModalPage={this.props.AddEvent} />

        {!this.state.results.length ? (
          <h1>No Events to Display</h1>
        ) : (
          this.state.results.map(event => {
            return (
              <PostIt
                key={event._id}
                title={event.title}
                summary={event.summary}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default Events;
