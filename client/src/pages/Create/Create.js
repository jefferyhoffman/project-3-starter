import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class Create extends Component {
static contextType = AuthContext;

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

  handleSubmit(authToken) {

    API.Drinks.createDrink({
      image: this.state.image,
      name: this.state.name,
      instructions: this.state.name,
      ingredients_measurements: this.state.name
    }, authToken)
      .then(() => this.setState({ isComplete: true }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.context)
    let { authToken } = this.context
    let { id } = this.context
    
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
              <FormBtn onClick={() => this.handleSubmit(authToken)}>Submit Drink</FormBtn>
        </form>
      </div>
    );
  }
}

export default Create;
