import React, { Component } from "react";
import API from "../../utils/API";
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
    post_title: "",
    post_details: "",
    help_needed: "",
    urgent: "",
    cost_per_hour: "",
    cost_per_service: "",
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
    console.log(this.state);
    if (this.state.post_title && this.state.post_details) {
      API.createOne("posts", {
        post_title: this.state.post_title,
        post_details: this.state.post_details,
        category: this.state.category,
        // urgent: this.state.urgent
        // help_needed: this.state.help_needed,
        offering: this.state.offering,
        cost_per_hour: this.state.cost_per_hour,
        cost_per_service: this.state.cost_per_service
        // trade: this.state.trade
      }).then(() => {
        this.setState({
          category: "",
          post_title: "",
          post_details: "",
          help_needed: "",
          urgent: "",
          cost_per_hour: "",
          cost_per_service: "",
          trade: ""
        });
      });
    }
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
                  value={this.state.urgent}
                  onChange={this.onChange}
                />
                <MDBDropdown>
                  <MDBDropdownToggle caret color="orange">
                    Category
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    basic
                    value={this.state.category}
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
                  name="post_title"
                  icon="pen"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.post_title}
                  onChange={this.onChange}
                />

                <MDBInput
                  label="Details About The Post"
                  type="textarea"
                  rows="4"
                  name="post_details"
                  icon="info-circle"
                  value={this.state.post_details}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Willing to pay per hour"
                  type="number"
                  name="cost_per_hour"
                  icon="money-bill-wave"
                  value={this.state.cost_per_hour}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Willing to pay per service"
                  type="number"
                  name="cost_per_service"
                  icon="money-check-alt"
                  value={this.state.cost_per_service}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Willing to trade"
                  type="text"
                  name="trade"
                  icon="comments-dollar"
                  value={this.state.trade}
                  onChange={this.onChange}
                />
              </div>

              <div className="text-center">
                <MDBBtn type="submit" value="Submit" onClick={this.onSubmit}>
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
