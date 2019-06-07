import React, { Component } from 'react';
import { Input, Select, FormBtn } from "../../components/Form";


class Search extends Component {
  state = {
    name: '',
    category: '',
    kind: '',
  }
  // example search in database for partial name with "Old"
  // db.getCollection('drinks').find({"name": {$regex: ".*Old.*"}})
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>Search Page</h1>

        <label>Drink Name</label>
        <Input name="name" onChange={this.handleInputChange} value={this.state.name} />
        <div className="form-group">
          <label>Drink Category</label>
          <Select name="category" className="form-control" id="category" onChange={this.handleInputChange} value={this.state.category}>
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
        <div className="form-group">
          <label>Drink Kind</label>
          <Select name="kind" className="form-control" id="kind" onChange={this.handleInputChange} value={this.state.kind}>
            <option>Alcoholic</option>
            <option>Non alcoholic</option>
            <option>Optional alcohol</option>
          </Select>
        </div>
      </div>
    );
  }
}
export default Search;
