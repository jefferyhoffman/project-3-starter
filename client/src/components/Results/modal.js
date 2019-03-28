import React, { Component } from "react";
import { Button, Modal, ButtonToolbar } from "react-bootstrap";

class MyVerticallyCenteredModal extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Trip Itinerary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="container">
                  <ul>
                    {this.props.tripInfo.map(task => (
                      <li key={task.text}>{task.text}</li>
                    ))}
                  </ul>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

class IModal extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="row">
      <div className="col-lg-12">
      <ButtonToolbar>
        <Button
          id="modalbutton"
          onClick={() => this.setState({ modalShow: true })}
        >
         View Itinerary
        </Button>

            <MyVerticallyCenteredModal
              tripInfo={this.props.tripInfo}
              show={this.state.modalShow}
              onHide={modalClose}
            />
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default IModal;
