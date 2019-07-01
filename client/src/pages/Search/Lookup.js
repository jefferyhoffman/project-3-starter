import React, { Component } from 'react';
import { Input, Select, FormBtn } from "../../components/Form";
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';
import '../Search/search.css';

class Lookup extends Component {
  static contextType = AuthContext;

  state = {
    name: '',
    drinks: []
  }

  // handleInputChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleSubmit = (event) => {
  //   let { authToken } = this.context

  //   API.Drinks.search(authToken, this.state.name)
  //     .then((response) => {
  //       this.setState({
  //         drinks: response.data
  //       })
  //     }

  //     )
  //     .catch(err => console.log(err));
  // }

  handleInputChange = event => {
    let { authToken } = this.context

    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    API.Drinks.search(authToken, this.state.name)
      .then((response) => {
        console.log(response.data)
        this.setState({
          drinks: response.data
        })
      }

      )
      .catch(err => console.log(err));
  }

  render() {

    return (
      <>
        <div>
          <div className="container-lookup">
            <h2 className='pages-header'>Look up a drink!</h2>
            <br />
            <br />
            <div className='row'>
              <div className='col-12'>
              <form>
                <div className="form-group-searchbar">
                  <Input name="name" onChange={this.handleInputChange} value={this.state.name} type='text' className="form-control mr-sm-2 search" id="exampleInputsearch1" aria-describedby="searchHelp" placeholder="&#xF002;  Search....."/>
                </div>
              </form>
            </div>
            {/* <div className='col-4'></div>
              <div className='col-4'>
                <form class="form-inline my-2 my-lg-0">
                  <div className="form-group">
                    <Input name="name" onChange={this.handleInputChange} value={this.state.name} type="search" className="form-control mr-sm-2 search" id="exampleInputsearch1" aria-describedby="searchHelp" placeholder="&#xF002;" />
                    <br />
                    <br />
                    <FormBtn className="my-2 my-sm-0" onClick={this.handleSubmit}>Submit Drink</FormBtn>
                  </div>
                </form>
              </div>
              <div className='col-4'></div> 
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
          </div>
          <div className='row'>
            {this.state.drinks.map(drink => {
              return (
                <div className="card-drinks mb-3">
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
              )
            })}
          </div>
        </div>
      </div >
      </>
    );
  }
}
export default Lookup;
