import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea } from "../../components/Form";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class View extends Component {
  state = {
    drinks: [],
    image: "",
    name: "",
    instructions: "",
    ingredients_measurements: ""
  };

  componentDidMount() {
    this.loadDrinks();
  }

  loadDrinks = () => {
    API.Drinks.getAll()
      .then(res =>
        this.setState({ drinks: res.data, image: "", name: "", instructions: "" , ingredients_measurements: "" })
      )
      .catch(err => console.log(err));
  };

  deleteDrinks = id => {
    API.deleteDrinks(id)
      .then(res => this.loadDrinks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.image && this.state.name) {
      API.saveDrinks({
        image: this.state.image,
        name: this.state.name,
        instructions: this.state.instructions,
        ingredients_measurements: this.state.ingredients_measurements
      })
        .then(res => this.loadDrinks())
        .catch(err => console.log(err));
    }
  };

  render() {
    let { drinks } = this.state
    
    if (this.state.isComplete) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>View Drinks</h1>
        {drinks.map(drink=>{
          return (
            <>
            <h3>{drink.name}</h3>
            <p>{drink.instructions}</p>
            </>
          )
        })}
      </div>
    );
  }
}

export default View;

// name: { type: String, required: true },
//     category: { type: String },
//     kind: { type: String },
//     image: { type: String, default: "http://placehold.it/200x200" },
//     instructions: { type: String, required: true },
//     ingredients_measurements: { type: String},
//     // ingredient1: { type: String, required: true },
//     // ingredient2: { type: String },
//     // ingredient3: { type: String },
//     // ingredient4: { type: String },
//     // ingredient5: { type: String },
//     glass: