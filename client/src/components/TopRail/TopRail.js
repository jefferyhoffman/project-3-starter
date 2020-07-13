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
    console.log(data);
  };
  
  render() {

    let options = this.state.categories.map((category) => {
      return (
        {
          key: category.id,
          text: category.category,
          value: category.category
        }
      )
    })

    return (
      <Responsive maxWidth={1799}>
        <Dropdown className="width" fluid placeholder="Food Category" multiple selection search options={options} />
      </Responsive>
    );

    // <Responsive
    //   as={Dropdown}
    //   maxWidth={1799}
    //   onChange={handleChange}
    //   className="width"
    //   placeholder="Food Category"
    //   fluid
    //   selection
    //   options={foodOptions}
    // />
  }
};

export default TopRail;