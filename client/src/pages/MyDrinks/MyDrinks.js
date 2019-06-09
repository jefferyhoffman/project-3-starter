import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, TextArea, Select, FormBtn } from "../../components/Form";
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import '../MyDrinks/MyDrinks.css';

const xbutton={display:"flex" , alignItems:"center"}
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
        this.setState({ drinks: res.data, image: "", name: "", instructions: "", ingredients_measurements: "" })
      )
      .catch(err => console.log(err));
  };

  deleteDrinks = id => {
    let { authToken } = this.context;
    API.Drinks.delete(authToken, id)
      .then(res => this.setState({
        drinks: res.data.drinks
      }))
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

    if (this.state.isComplete) {
      return <Redirect to="/mine" />;
    }

    return (
      <div>
        {drinks.map(drink => {
          return (
            <>
              <div className="container"><div className="row no-gutters"> <div className="col-1" style={xbutton}> <FormBtn className="deletebtn" onClick={() => this.deleteDrinks(drink._id)}><span aria-hidden="true">&times;</span></FormBtn>
              </div><div className="col-11">
              <div>
                <h2 className='pages-header'>Your Creations!</h2>
                <div className="card-drinks mb-3 container">
                  <div className="row no-gutters">
                    <div className="col-md-3">
                      <img src={drink.image} alt={drink.name} className="card-img">
                      </img>
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 className="card-title"><h3>{drink.name}</h3></h5>
                        <p className="card-text"><h5>{drink.kind} - {drink.category}</h5>
                          <p className="card-text"> <p><strong>Ingredients:</strong> {drink.ingredients_measurements}</p><p><strong>Instructions:</strong> {drink.instructions}</p> <p><strong>Glass: </strong>{drink.glass}</p> </p></p>
                        <p className="card-text"><small class="text-muted"></small></p>
                      </div>
                    </div>
                  </div>
                </div>
                </div> </div> </div>
                </div>
            </>
              )
            })}
      </div>
       
    
          );
        }
}



        export default MYDrinks;
