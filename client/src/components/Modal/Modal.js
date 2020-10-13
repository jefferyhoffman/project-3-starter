import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state={
  modal6: false,
  modal7: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn color="secondary" onClick={this.toggle(6)}>Top right</MDBBtn>
        <MDBModal isOpen={this.state.modal6} toggle={this.toggle(6)} side position="top-right">
          <MDBModalHeader toggle={this.toggle(6)}> <i class="fas fa-check"></i>Added to Bag</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(6)}>Close</MDBBtn>
            <MDBBtn color="black">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBBtn color="secondary" onClick={this.toggle(7)}>Bottom left</MDBBtn>
        <MDBModal isOpen={this.state.modal7} toggle={this.toggle(7)} side position="bottom-left">
          <MDBModalHeader toggle={this.toggle(7)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
          {/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(7)}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter> */}
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;