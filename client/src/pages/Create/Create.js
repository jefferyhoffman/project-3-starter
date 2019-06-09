import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, Select, FormBtn } from '../../components/Form';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import create from '../Images/create.jpg';

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
      return <Redirect to='../../MyDrinks' />;
    }

    return (
      <>
      <div className='card-create mb-3 container'>
          <div className='row mb-3'>
            <div className='col-md-5'>
              {/* <img src={create} className='create-img-responsive' alt='drink' /> */}
              <img src={create} className='create-img' alt='drink' />
            </div>
            <div className='col-md-6'>
              <div className='card-body-create'>
                <h2 className='pages-header card-title'>Craft your drink</h2>
            <p className='card-title'>Add your favroite drink!</p>
                <form onSubmit={this.handleSubmit}>
                  <div class='form-row'>
                    <div class='form-group col-md-6'>
                      <label for='name'>Drink Name:</label>
                      <Input name='name' onChange={this.handleInputChange} value={this.state.name} placeholder='Drink Name (required)' />
                    </div>
                    <div class='form-group col-md-6'>
                      <label for='image'>Drink Image Link:</label>
                      <Input name='image' onChange={this.handleInputChange} value={this.state.image} placeholder='Image Link (required)' />
                    </div>
                  </div>
                  <div class='form-row'>
                    <div class='form-group col-md-6'>
                      <label for='category'>Drink Category:</label>
                      <Select name='category' className='form-control' id='category' onChange={this.handleInputChange} value={this.state.category}>
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
                      </Select>
                    </div>
                    <div class='form-group col-md-6'>
                      <label for='kind'>Drink Kind:</label>
                      <Select name='kind' className='form-control' id='kind' onChange={this.handleInputChange} value={this.state.kind}>
                        <option>Alcoholic</option>
                        <option>Non alcoholic</option>
                        <option>Optional alcohol</option>
                      </Select>
                    </div>
                  </div>
                  <div class='form-row'>
                    <div className='form-group col-md-6'>
                      <label for='ingredients_measurements'>Drrink Ingredients:</label>
                      <TextArea name='ingredients_measurements' onChange={this.handleInputChange} value={this.state.ingredients_measurements} placeholder='Ingredients/Measurements' />
                    </div>
                    <div className='form-group col-md-6'>
                      <label for='instructions'>Drink Instructions:</label>
                      <TextArea name='instructions' onChange={this.handleInputChange} value={this.state.instructions} placeholder='Instructions (required)' />
                    </div>
                  </div>
                  <div class='form-row'>
                    <div className='form-group col-md-6'>
                      <Select name='glass' className='form-control' id='glass' onChange={this.handleInputChange} value={this.state.glass} placeholder='Type of glass (required)'>
                        <option>Highball glass</option>
                        <option>Cocktail glass</option>
                        <option>Old-fashioned glass</option>
                        <option>Collins glass</option>
                        <option>Pousse cafe glass</option>
                        <option>Champagne flute</option>
                        <option>Whiskey sour glass</option>
                        <option>Brandy snifter</option>
                        <option>White wine glass</option>
                        <option>Nick and Nora Glass</option>
                        <option>Hurricane glass</option>
                        <option>Coffee mug</option>
                        <option>Shot glass</option>
                        <option>Jar</option>
                        <option>Irish coffee cup</option>
                        <option>Punch bowl</option>
                        <option>Pitcher</option>
                        <option>Pint glass</option>
                        <option>Copper Mug</option>
                        <option>Wine Glass</option>
                        <option>Cordial glass</option>
                        <option>Beer mug</option>
                        <option>Margarita/Coupette glass</option>
                        <option>Beer pilsner</option>
                        <option>Beer Glass</option>
                        <option>Parfait glass</option>
                        <option>Mason jar</option>
                        <option>Margarita glass</option>
                        <option>Martini Glass</option>
                        <option>Balloon Glass</option>
                        <option>Coupe Glass</option>
                        <option>Other/Any</option>
                      </Select>
                    </div>
                    <div className='form-group col-md-6'>
                     <FormBtn className='btn-lg btn-block' onClick={() => this.handleSubmit(authToken)}>Submit Drink</FormBtn>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
</>
    );
  }
}

export default Create;
