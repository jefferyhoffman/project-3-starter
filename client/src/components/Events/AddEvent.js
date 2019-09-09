import React, { Component } from 'react';
import API from '../../utils/API';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './AddEvent.css';
// import ModalPage from "./EventModal";

export class AddEvent extends Component {
  state = {
    event_title: '',
    event_place: '',
    event_date: '',
    eventTime: '',
    event_details: '',
    html_url: '',
    event_url: '',
    event_task: '',
    community: '',
    isTaskCompleted: '',
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
    if (this.state.event_title) {
      API.createOne('events', {
        // community: this.state.community,
        event_title: this.state.event_title,
        event_place: this.state.event_place,
        event_date: this.state.event_date,
        // event_time: this.state.event_time,
        html_url: this.state.html_url,
        event_url: this.state.event_url,
        event_details: this.state.event_details
        // event_task: this.state.event_task,
        // isTaskCompleted: this.state.isTaskCompleted
      }).then(() => {
        this.setState({
          community: '',
          event_title: '',
          event_place: '',
          event_date: '',
          event_time: '',
          event_details: '',
          event_url: '',
          html_url: '',
          event_task: '',
          isTaskCompleted: ''
        });
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12'>
            <form>
              <div className='orange-text'>
                <MDBInput
                  label='Event Title'
                  type='text'
                  name='event_title'
                  icon='calendar-check'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.event_title}
                  onChange={this.onChange}
                />
                <MDBInput
                  label='Place'
                  type='text'
                  name='event_place'
                  icon='map-marker-alt'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.event_place}
                  onChange={this.onChange}
                />
                <MDBInput
                  label='Date'
                  type='date'
                  name='event_date'
                  icon='calendar-alt'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.event_date}
                  onChange={this.onChange}
                />
                <MDBInput
                  icon='clock'
                  label='Time'
                  type='text'
                  name='time'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.event_time}
                  onChange={this.onChange}
                />
                <MDBInput
                  label='Community'
                  type='text'
                  name='community'
                  icon='users'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.community}
                  onChange={this.onChange}
                />
                <MDBInput
                  icon='desktop'
                  label='Website Link'
                  type='text'
                  name='html_url'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.html_url}
                  onChange={this.onChange}
                />
                <MDBInput
                  icon='image'
                  label='Photo URL'
                  type='text'
                  name='event_url'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.event_url}
                  onChange={this.onChange}
                />
                <MDBInput
                  label='Details About The Event'
                  type='textarea'
                  rows='4'
                  name='event_details'
                  icon='info-circle'
                  value={this.state.event_details}
                  onChange={this.onChange}
                />
              </div>

              <div className='text-center'>
                <MDBBtn type='submit' value='Submit' onClick={this.onSubmit}>
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
