import React, { Component } from "react";
import { Dropdown, Responsive } from "semantic-ui-react";
import "./TopRail.css";
import API from "../../lib/API";

class TopRail extends Component {
  state = {
    categories: [],
    checked: [],
    err: "",
  };

  componentDidMount() {
    API.Categories.all()
      .then((response) => {
        this.setState({ categories: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }

  handleChange = (e, data) => {
    this.setState({ checked: data.value });

    if (data.value.length === 0) {
      API.Recipes.all().then((response) => {
        this.props.filteredList(response.data);
      });
    } else {
      API.Recipes.all().then((response) => {
        const checkedArr = [];

        response.data.forEach((recipe) => {
          for (let i = 0; i < recipe.categories.length; i++) {
            if (this.state.checked.includes(recipe.categories[i].id)) {
              checkedArr.push(recipe);
            }
          }
        });
        this.props.filteredList(checkedArr);
      });
    }
  };

  render() {
    let options = this.state.categories.map((category) => {
      return {
        key: category.id,
        text: category.category,
        value: category.id,
      };
    });

    return (
      <Responsive maxWidth={1799}>
        <Dropdown
          className="width"
          closeOnChange
          fluid
          placeholder="Food Category"
          multiple
          selection
          search
          options={options}
          onChange={this.handleChange}
        />
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
}

export default TopRail;
