import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./AddEvent.css";
//import ModalPage from "./EventModal";

export class AddEvent extends Component {
  state = {
    eventTitle: "",
    eventPlace: "",
    eventDate: "",
    eventTime: "",
    eventBody: "",
    user: {}
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    // if (
    //   !this.state.eventTitle &&
    //   !this.state.eventPlace &&
    //   !this.state.eventDate &&
    //   !this.state.eventTime &&
    //   !this.state.eventBody &&
    // ) {
    //   alert( "Please fill in all fields");
    // }
    //   API.createEvent({
    //     title: this.state.eventTitle,
    //     place: this.state.eventPlace,
    //     date: this.state.eventDate,
    //     time: this.state.eventTime,
    //     body: this.state.eventBody,
    //     user: this.props.user._id
    //   }).then(() => {
    //     this.setState({
    //       eventTitle: "",
    //       eventPlace: "",
    //       eventDate: "",
    //       eventTime: "",
    //       eventBody: ""
    //     });
    //   });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form>
              <div className="orange-text">
                <MDBInput
                  label="Event Title"
                  type="text"
                  name="title"
                  icon="users"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.eventTitle}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Place"
                  type="text"
                  name="place"
                  icon="map-marker-alt"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.eventPlace}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Date"
                  type="text"
                  name="date"
                  icon="calendar-alt"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.evenDate}
                  onChange={this.onChange}
                />
                <MDBInput
                  icon="clock"
                  label="Time"
                  type="text"
                  name="time"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.eventTime}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Details About The Event"
                  type="textarea"
                  rows="4"
                  name="body"
                  icon="info-circle"
                  value={this.props.eventBody}
                  onChange={this.onChange}
                />
              </div>

              <div className="text-center">
                <MDBBtn type="submit" value="Submit">
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddEvent;
