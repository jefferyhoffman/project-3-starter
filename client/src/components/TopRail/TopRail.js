import React, { Component } from "react";
import {
  Dropdown,
  Responsive,
} from "semantic-ui-react";
import "./TopRail.css";
import API from "../../lib/API";
import { Redirect } from "react-router";

class TopRail extends Component {
  
  state = {
    categories: [],
    checked: [],
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
    this.setState({ checked: data.value })

    API.Recipes.all()
    .then((response) => {
      // console.log(response)
      const checkedArr = [];
      let allData = response.data
      console.log(allData)
      response.data.forEach((recipe) => {
        for (let i = 0; i < recipe.categories.length; i++) {
          if (this.state.checked.includes(recipe.categories[i].id)) {
            checkedArr.push(recipe);
          }
        }
      })
      console.log(checkedArr)

      if (checkedArr === []) {
        this.props.filteredList(allData)
      } else {
        this.props.filteredList(checkedArr)
      }
      this.setState({checked: []});
    })
  };
  
  render() {

    let options = this.state.categories.map((category) => {
      return (
        {
          key: category.id,
          text: category.category,
          value: category.id
        }
      )
    })

    return (
      <Responsive maxWidth={1799}>
        <Dropdown className="width" closeOnChange fluid placeholder="Food Category" multiple selection search options={options} onChange={this.handleChange}/>
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