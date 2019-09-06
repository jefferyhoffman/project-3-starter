import React, { Component } from "react";
import AddPost from "./AddPost";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader
} from "mdbreact";

class PostModal extends Component {
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
        <MDBBtn onClick={this.toggle}>New Post</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Help Needed</MDBModalHeader>
          <MDBModalBody>{<AddPost />}</MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default PostModal;
