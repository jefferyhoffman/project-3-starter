import React, { Component } from "react";
import {
  Grid,
  Checkbox,
  Rail,
  Segment,
  Responsive,
  Button,
} from "semantic-ui-react";
import "./LeftRail.css";
import API from "../../lib/API";



class LeftRail extends Component {

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

  //This works but does allow duplicates from checking/unchecking.
  handleChange = (e, data) => {
    console.log(data.id);
    this.setState({checked: [...this.state.checked, data.id]})
  };

  handleClick = () => {
    console.log(this.state.checked)
    API.Recipes.all()
    .then((response) => {
      console.log(response)
      const checkedArr = [];
      response.data.forEach((recipe) => {
        for (let i = 0; i < recipe.categories.length; i++) {
          if (this.state.checked.includes(recipe.categories[i].id)) {
            checkedArr.push(recipe);
          }
        }
      })
      console.log(checkedArr)
      this.setState({checked: []});
    })
  }
  
  render() {
  return (
    <Grid centered columns={2}>
    <Grid.Column>
      <Rail position="left">
          {/* <Responsive as={IngredientDropdown} minWidth={1800}></Responsive> */}
          <Responsive as={Segment} minWidth={1800} className="flexColumn">
            <strong>What's the occasion?</strong>
            {this.state.categories.map((category) => {
              return(
              <Checkbox key={category.id} id={category.id} className='checks' label={category.category} onChange={this.handleChange} />
              )})}
            <Button onClick={this.handleClick}className='checks'>Ok</Button>
          </Responsive>
      </Rail>
    </Grid.Column>
  </Grid>);
  }
};

export default LeftRail;
