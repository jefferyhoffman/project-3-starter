import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, Select, FormBtn } from "../../components/Form";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

class MYDrinks extends Component {
  static contextType = AuthContext;

  state = {
    drinks: [],
    image: "",
    name: "",
    instructions: "",
    ingredients_measurements: ""
  };


  componentDidMount() {
    API.Users.getMe(this.context.authToken)
    .then(response => response.data)
    .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
    .then(next => this.loadDrinks())
    .catch(err => console.log(err));
    // console.log("component Did Mount and sent to load drinks")
  }

  loadDrinks = () => {
    console.log("loadDrinks initiated")
    API.Drinks.getMine(this.context.authToken)
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
        category: this.state.category,
        kind: this.state.kind,
        instructions: this.state.instructions,
        ingredients_measurements: this.state.ingredients_measurements,
        glass: this.state.glass,
      })
        .then(res => this.loadDrinks())
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.state)
    console.log(this.context)
    let { drinks } = this.state
    let { authToken } = this.context
    
    if (this.state.isComplete) {
      return <Redirect to="/mine" />;
    }

    return (
      <div>
        <h1>My Drinks</h1>
        {drinks.map(drink=>{
          return (
            <>
            <h3>{drink.name}</h3>
            <p>{drink.instructions}</p>
            <p>{drink.category}</p>
            <p>{drink.kind}</p>
            <p>{drink.ingredients_measurements}</p>
            <p><img src={drink.image} alt={drink.name} /></p> 
            <p>{drink.glass}</p>
            </>
          )
        })}
      </div>
    );
  }
}


export default MYDrinks;
