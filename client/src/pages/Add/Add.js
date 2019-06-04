import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from '../../lib/API';

class Add extends Component {
  state = {
    image: '',
    name: '',
    instructions: '',
    ingredients_measurements: '',
    isComplete: false
  }

  handleInputChange = event => {
    const { name, value } = event.target;    

    this.setState({
      [name]: value

    });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.Drinks.createDrink({
      image: this.state.image,
      name: this.state.name,
      instructions: this.state.name,
      ingredients_measurements: this.state.name
    })
      .then(() => this.setState({ isComplete: true }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.isComplete) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Create Drink</h1>
        <form onSubmit={this.handleSubmit}>
              <Input name="image" onChange={this.handleInputChange} value={this.state.image} placeholder="Image (required)" />
              <Input name="name" onChange={this.handleInputChange} value={this.state.name} placeholder="Name (required)" />
              <TextArea name="instructions" onChange={this.handleInputChange} value={this.state.instructions} placeholder="Instructions (required)" />
              <TextArea name="ingredients_measurements" onChange={this.handleInputChange} value={this.state.ingredients_measurements} placeholder="Ingredients/Measureements" />
              <FormBtn>Submit Drink</FormBtn>
        </form>
      </div>
    );
  }
}

export default Add;
