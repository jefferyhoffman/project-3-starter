import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import pic6 from "../Images/pic6.jpg";

class Create extends Component {
  static contextType = AuthContext;

  state = {
    image: '',
    name: '',
    category: '',
    kind: '',
    instructions: '',
    ingredients_measurements: '',
    glass: '',
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
      category: this.state.category,
      kind: this.state.kind,
      instructions: this.state.instructions,
      ingredients_measurements: this.state.ingredients_measurement,
      glass: this.state.glass
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
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pic6} className="card-img" alt="drink" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Craft your drink</h5>
                <p className="card-text">Add the reciepe of your favroite drink!</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                  <div className="form-group">
                    <label for="name">Drink Name</label>
                    <Input name="name" onChange={this.handleInputChange} value={this.state.name} placeholder="Name (required)" />
                       </div>
                    <label for="image">Drink Image Link</label>
                    <Input name="image" onChange={this.handleInputChange} value={this.state.image} placeholder="Image (required)" />
                       </div>
                    <div className="form-group">
                      <label for="category">Drink Category</label>
                      <select className="form-control" id="category" onChange={this.handleInputChange} value={this.state.category}>
                        <option>Ordinary Drink</option>
                        <option>Cocktail</option>
                        <option>Milk / Float / Shake</option>
                        <option>Other/Unknown</option>
                        <option>Cocoa</option>
                        <option>Shot</option>
                        <option>Coffee / Tea</option>
                        <option>Homemade Liqueur</option>
                        <option>Punch / Party Drink</option>
                        <option>Beer</option>
                        <option>Soft Drink / Soda</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="kind">Drink Kind</label>
                      <select className="form-control" id="kind" onChange={this.handleInputChange} value={this.state.kind}>
                        <option>Alcoholic</option>
                        <option>Non alcoholic</option>
                        <option>Optional alcohol</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="ingredients_measurements">Reciepe Ingredients and Measurements</label>
                      <TextArea name="ingredients_measurements" onChange={this.handleInputChange} value={this.state.ingredients_measurements} placeholder="Ingredients/Measurements" />
                    </div>
                    <div className="form-group">
                      <label for="instructions">Reciepe Instructions</label>
                      <TextArea name="instructions" onChange={this.handleInputChange} value={this.state.instructions} placeholder="Instructions (required)" />
                    </div>
                    <div className="form-group">
                      <label for="glass">Select Glass</label>
                      <select className="form-control" id="glass" onChange={this.handleInputChange} value={this.state.glass}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    {/* <FormBtn type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleSubmit(authToken)}>Submit Drink</FormBtn> */}
                    <FormBtn onClick={() => this.handleSubmit(authToken)}>Submit Drink</FormBtn>
                 </form>
                </div>
              </div>
            </div>
          </div>

        {/* <h1>Create Drink</h1>
        <form onSubmit={this.handleSubmit}>
          
              <Input name="image" onChange={this.handleInputChange} value={this.state.image} placeholder="Image (required)" />
              <Input name="name" onChange={this.handleInputChange} value={this.state.name} placeholder="Name (required)" />
              <TextArea name="instructions" onChange={this.handleInputChange} value={this.state.instructions} placeholder="Instructions (required)" />
              <TextArea name="ingredients_measurements" onChange={this.handleInputChange} value={this.state.ingredients_measurements} placeholder="Ingredients/Measureements" />
              <FormBtn onClick={() => this.handleSubmit(authToken)}>Submit Drink</FormBtn>
        </form> */}
        </div>
        );
      }
    }
    
    export default Create;
