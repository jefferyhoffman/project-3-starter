import React, { Component } from "react";
import AddEvent from "./AddEvent";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader
} from "mdbreact";

class ModalPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Create An Event</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Create An Event</MDBModalHeader>
          <MDBModalBody>{<AddEvent />}</MDBModalBody>
          <MDBBtn onClick={this.toggle}>Close</MDBBtn>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
