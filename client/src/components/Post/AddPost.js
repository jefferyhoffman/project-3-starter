import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import "./AddPost.css";
// import ModalPage from "./EventModal";

export class AddPost extends Component {
  state = {
    category: "",
    postTitle: "",
    postBody: "",
    helpWanted: "",
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
    //   !this.state.helpWanted &&
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
    //     helpNeeded: this.state.helpWanted,
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
    //       helpWanted: "",
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
                  label="Is it urgent?"
                  type="checkbox"
                  id="checkbox2"
                  name="urgent"
                  icon="bell"
                  value="false"
                  value={this.props.urgent}
                  onChange={this.onChange}
                />
                <MDBDropdown>
                  <MDBDropdownToggle caret color="orange">
                    Category
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    basic
                    value={this.props.category}
                    onChange={this.onChange}
                  >
                    <MDBDropdownItem>Yard</MDBDropdownItem>
                    <MDBDropdownItem>Kids</MDBDropdownItem>
                    <MDBDropdownItem>Pets</MDBDropdownItem>
                    <MDBDropdownItem>Housework</MDBDropdownItem>
                    <MDBDropdownItem>Carpooling</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem>Other</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
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
                <MDBInput
                  label="Willing to pay per hour"
                  type="number"
                  name="costPerHour"
                  icon="money-bill-wave"
                  value={this.props.costPerHour}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Willing to pay per service"
                  type="number"
                  name="costPerService"
                  icon="money-check-alt"
                  value={this.props.costPerService}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Willing to trade"
                  type=" "
                  name="costPerService"
                  icon="comments-dollar"
                  value={this.props.costPerService}
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
