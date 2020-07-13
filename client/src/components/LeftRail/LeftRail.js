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
    console.log(data.id);
  };
  
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
            <Button className='checks'>Ok</Button>
          </Responsive>
      </Rail>
    </Grid.Column>
  </Grid>);
  }
};

export default LeftRail;
