import React, { Component } from "react";
import {
  Dropdown,
  Responsive,
} from "semantic-ui-react";
import "./TopRail.css";
import API from "../../lib/API";

class TopRail extends Component {
  
  state = {
    categories: [],
    err: ""
  }
  
  componentDidMount() {
    API.Categories.all()
    .then((response) => {
      this.setState({ categories: response.data, err: "" });
      console.log(this.state.categories)
    })
    .catch((err) => this.setState({ err: err.message }))
  }
  
  handleChange = (e, data) => {
    console.log(data.value);
  };
  
  render() {

    return (
      <Responsive maxWidth={1799}>
        <Dropdown className="width" text="What's the occasion?">
          <Dropdown.Menu>
          {this.state.categories.map((category) => {
            return(<Dropdown.Item key={category.id} id={category.id} text={category.category} />)
          })}
          </Dropdown.Menu>
        </Dropdown>
      </Responsive>
    );
  }
};

export default TopRail;