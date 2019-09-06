import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./AddPost.css";
// import ModalPage from "./EventModal";

export class AddPost extends Component {
  state = {
    category: "",
    postTitle: "",
    postBody: "",
    helpNeeded: "",
    offeringHelp: "",
    urgent: "",
    costPerHour: "",
    costPerService: "",
    trade: "",
    comment: {},
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
    //   !this.state.category &&
    //   !this.state.postTitle &&
    //   !this.state.postBody &&
    //   !this.state.helpNeeded &&
    //   !this.state.offeringHelp &&
    //   !this.state.urgent &&
    //   !this.state.costPerHour &&
    //   !this.state.costPerService &&
    //   !this.state.trade &&

    // ) {
    //   alert( "Please fill in all fields");
    // }
    //   API.createPost({
    //     category: this.state.category,
    //     postTitle: this.state.postTitle,
    //     postBody: this.state.postBody,
    //     helpNeeded: this.state.helpNeeded,
    //     offeringHelp: this.state.offeringHelp,
    //     urgent: this.state.urgent,
    //     costPerHour: this.state.costPerHour,
    //     costPerService: this.state.costPerService,
    //     trade: this.state.trade
    //     user: this.props.user._id

    //   }).then(() => {
    //     this.setState({
    //       category: "",
    //       postTitle: "",
    //       postBody: "",
    //       helpNeeded: "",
    //       offeringHelp: "",
    //       urgent: "",
    //       costPerHour: "",
    //       costPerService: "",
    //       trade: ""
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
                  label="Post Title"
                  type="text"
                  name="title"
                  icon="pen"
                  validate
                  error="wrong"
                  success="right"
                  value={this.props.postTitle}
                  onChange={this.onChange}
                />

                <MDBInput
                  label="Details About The Post"
                  type="textarea"
                  rows="4"
                  name="body"
                  icon="info-circle"
                  value={this.props.postBody}
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

export default AddPost;
