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
        this.setState({ drinks: res.data, image: "", name: "", instructions: "", ingredients_measurements: "" })
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
        <br/>
      <h2 className='pages-header'>Drinks Collection</h2>
        {drinks.map(drink => {
          return (
            <>
              <div>
                <div className="card-drinks mb-3 container">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <img src={drink.image} alt={drink.name} className="card-img">
                      </img>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title"><h3>{drink.name}</h3></h5>
                        <p className="card-text"><h5>{drink.kind} - {drink.category}</h5>
                          <p className="card-text"> <p><strong>Ingredients:</strong> {drink.ingredients_measurements}</p><p><strong>Instructions:</strong> {drink.instructions}</p> <p><strong>Glass: </strong>{drink.glass}</p> </p></p>
                        <p className="card-text"><small class="text-muted"></small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    );
  }
}


export default View;

