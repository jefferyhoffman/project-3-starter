import React, { Component } from 'react';
import { Input, Select, FormBtn } from '../../components/Form';
import AuthContext from '../../contexts/AuthContext';
import APISearch from '../../lib/APISearch';
import '../Search/search.css';

class AllSearch extends Component {
  static contextType = AuthContext;

  state = {
    name: '',
    kind: '',
    category: '',
    liquor: '',
    ingredient: '',
    glass: '',
    drinks: [],
  }

  handleInputChange = event => {
    this.setState({ drinks: [], name: event.target.value });
  }

  handleInputChange1 = event => {
    this.setState({ drinks: [], kind: event.target.value });
  }

  handleInputChange2 = event => {
    this.setState({ drinks: [], category: event.target.value });
  }

  handleInputChange3 = event => {
    this.setState({ drinks: [], liquor: event.target.value });
  }

  handleInputChange4 = event => {
    this.setState({ drinks: [], ingredient: event.target.value });
  }

  handleInputChange5 = event => {
    this.setState({ drinks: [], glass: event.target.value });
  };

  handleSubmit0 = (event) => {
    APISearch.searchByRandom()
      .then((response) => {
        this.setState(
          console.log(response.data.drinks),
          this.setState(
            { drinks: response.data.drinks }
          )
        )
      })
      .catch(err => console.log(err));
  }

  handleSubmit = (event) => {
    APISearch.searchByName(this.state.name)
      .then((response) => {
        this.setState(
          console.log(response.data.drinks),
          this.setState(
            { drinks: response.data.drinks }
          )
        )
      })
      .catch(err => console.log(err));
  }

  handleSubmit1 = (event) => {
    APISearch.searchByKind(this.state.kind)
      .then((response) => {
        this.setState(
          { APIdrinks: response.data.drinks })
        this.state.APIdrinks.map(APIdrink => {
          return (
            APISearch.searchByDrinkId(APIdrink.idDrink)
              .then((response) => {
                console.log(response.data.drinks)
                this.setState(
                  { drinks: (response.data.drinks).concat(this.state.drinks) }
                )
              })

          )
        })
      })
      .catch(err => console.log(err));
  }

  handleSubmit2 = (event) => {
    APISearch.searchByCategory(this.state.category)
      .then((response) => {
        this.setState(
          { APIdrinks: response.data.drinks })
        this.state.APIdrinks.map(APIdrink => {
          return (
            APISearch.searchByDrinkId(APIdrink.idDrink)
              .then((response) => {
                console.log(response.data.drinks)
                this.setState(
                  { drinks: (response.data.drinks).concat(this.state.drinks) }
                )
              })
          )
        })
      })
      .catch(err => console.log(err));
  }

  handleSubmit3 = (event) => {
    APISearch.searchByLiquor(this.state.liquor)
      .then((response) => {
        this.setState(
          { APIdrinks: response.data.drinks })
        this.state.APIdrinks.map(APIdrink => {
          return (
            APISearch.searchByDrinkId(APIdrink.idDrink)
              .then((response) => {
                console.log(response.data.drinks)
                this.setState(
                  { drinks: (response.data.drinks).concat(this.state.drinks) }
                )
              })
          )
        })
      })
      .catch(err => console.log(err));
  }

  handleSubmit4 = (event) => {
    APISearch.searchByIngredient(this.state.ingredient)
      .then((response) => {
        this.setState(
          { APIdrinks: response.data.drinks })
        this.state.APIdrinks.map(APIdrink => {
          return (
            APISearch.searchByDrinkId(APIdrink.idDrink)
              .then((response) => {
                console.log(response.data.drinks)
                this.setState(
                  { drinks: (response.data.drinks).concat(this.state.drinks) }
                )
              })
          )
        })
      })
      .catch(err => console.log(err));
  }

  handleSubmit5 = (event) => {
    APISearch.searchByGlass(this.state.glass)
      .then((response) => {
        this.setState(
          { APIdrinks: response.data.drinks })
        this.state.APIdrinks.map(APIdrink => {
          return (
            APISearch.searchByDrinkId(APIdrink.idDrink)
              .then((response) => {
                console.log(response.data.drinks)
                this.setState(
                  { drinks: (response.data.drinks).concat(this.state.drinks) }
                )
              })
          )
        })
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <>
        <div>
          <div className='container-allsearch'>
            <h2 className='pages-header'>Search by Type!</h2>
            <br />
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='col-sm-4'>
                <form className='searchAPI' style={{ marginRight: '8%' }}>
                  <FormBtn onClick={this.handleSubmit0}><h4>Click to for a Random Drink</h4></FormBtn>
                </form>
                <div className='col-sm-4'></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <form className='searchAPI'>
                  <h4 className='search-header'>Name a Drink!</h4>
                  <div className='form-group'>
                    <Input name='name' onChange={this.handleInputChange} value={this.state.name} type='search' placeholder='Drink Name (required)' />
                  </div>
                  <FormBtn className='my-2 my-sm-0' onClick={this.handleSubmit}>Search</FormBtn>
                </form>
              </div>
              <div className='col-sm-4'>
                <form className='searchAPI'>
                  <h4 className='search-header'>Search drink kind!</h4>
                  <div className='form-group'>
                    <Select name='kind' className='form-control' id='kind' onChange={this.handleInputChange1} value={this.state.kind}>
                      <option>Alcoholic</option>
                      <option>Non alcoholic</option>
                      <option>Optional alcohol</option>
                    </Select>
                  </div>
                  <FormBtn className='my-2 my-sm-0' onClick={this.handleSubmit1}>Search</FormBtn>
                </form>
              </div>
              <div className='col-sm-4'>
                <form className='searchAPI'>
                  <div className='form-group'>
                    <h4 className='search-header'>Search a drink by Category!</h4>
                    <Select name='category' className='form-control' id='category' onChange={this.handleInputChange2} value={this.state.category}>
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
                  <FormBtn className='my-2 my-sm-0' onClick={this.handleSubmit2}>Search</FormBtn>
                </form>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <form className='searchAPI'>
                  <div className='form-group'>
                    <h4 className='search-header'>Search a drink by Liquor!</h4>
                    <Select name='liquor' className='form-control' id='liquor' onChange={this.handleInputChange3} value={this.state.liquor}>
                      <option>Light rum</option>
                      <option>Applejack</option>
                      <option>Gin</option>
                      <option>Dark rum</option>
                      <option>Sweet Vermouth</option>
                      <option>Strawberry schnapps</option>
                      <option>Scotch</option>
                      <option>Apricot brandy</option>
                      <option>Triple sec</option>
                      <option>Southern Comfort</option>
                      <option>Orange bitters</option>
                      <option>Brandy</option>
                      <option>Lemon vodka</option>
                      <option>Blended whiskey</option>
                      <option>Dry Vermouth</option>
                      <option>Amaretto</option>
                      <option>Champagne</option>
                      <option>Coffee liqueur</option>
                      <option>Bourbon</option>
                      <option>Tequila</option>
                      <option>Vodka</option>
                      <option>Añejo rum</option>
                      <option>Bitters</option>
                      <option>Kahlua</option>
                      <option>Dubonnet Rouge</option>
                      <option>Irish whiskey</option>
                      <option>Apple brandy</option>
                      <option>Cherry brandy</option>
                      <option>Creme de Cacao</option>
                      <option>Grenadine</option>
                      <option>Port</option>
                      <option>Coffee brandy</option>
                      <option>Red wine</option>
                      <option>Rum</option>
                      <option>Ricard</option>
                      <option>Sherry</option>
                      <option>Cognac</option>
                      <option>Sloe gin</option>
                      <option>Galliano</option>
                      <option>Peach Vodka</option>
                      <option>Ouzo</option>
                      <option>Spiced rum</option>
                      <option>Johnnie Walker</option>
                      <option>Everclear</option>
                      <option>Firewater</option>
                      <option>Lager</option>
                      <option>Whiskey</option>
                      <option>Absolut Citron</option>
                      <option>Pisco</option>
                      <option>Irish cream</option>
                      <option>Ale</option>
                      <option>Chocolate liqueur</option>
                      <option>Midori melon liqueur</option>
                      <option>Sambuca</option>
                      <option>Cider</option>
                      <option>Blackberry brandy</option>
                      <option>Peppermint schnapps</option>
                      <option>Creme de Cassis</option>
                      <option>Jack Daniels</option>
                      <option>Bailey's irish cream</option>
                      <option>151 proof rum</option>
                      <option>Absolut Vodka</option>
                      <option>Goldschlager</option>
                      <option>Crown Royal</option>
                      <option>Cointreau</option>
                      <option>Vermouth</option>
                      <option>Advocaat</option>
                      <option>Absolut Kurant</option>
                      <option>Beer</option>
                      <option>Cherry Heering</option>
                      <option>White Creme de Menthe</option>
                      <option>Malibu rum</option>
                      <option>Vanilla vodka</option>
                      <option>Jägermeister</option>
                      <option>Kiwi liqueur</option>
                      <option>Grand Marnier</option>
                      <option>Cachaca</option>
                      <option>Peachtree schnapps</option>
                      <option>Wild Turkey</option>
                      <option>Cranberry vodka</option>
                      <option>Corona</option>
                      <option>Yukon Jack</option>
                      <option>Coconut rum</option>
                      <option>Banana liqueur</option>
                      <option>Black Sambuca</option>
                      <option>Hot Damn</option>
                      <option>Campari</option>
                      <option>Absinthe</option>
                      <option>Whisky</option>
                      <option>Guinness stout</option>
                      <option>Chambord raspberry liqueur</option>
                      <option>Jim Beam</option>
                      <option>Godiva liqueur</option>
                      <option>Baileys irish cream</option>
                      <option>Zima</option>
                      <option>Blue Curacao</option>
                      <option>Maui</option>
                      <option>Frangelico</option>
                      <option>Bacardi Limon</option>
                      <option>Raspberry vodka</option>
                      <option>Green Creme de Menthe</option>
                      <option>Prosecco</option>
                      <option>White Rum</option>
                      <option>Mezcal</option>
                      <option>Green Chartreuse</option>
                      <option>Blended Scotch</option>
                      <option>Rye whiskey</option>
                    </Select>
                  </div>
                  <FormBtn className='my-2 my-sm-0' onClick={this.handleSubmit3}>Search</FormBtn>
                </form>
              </div>
              <div className='col-sm-4'>
                <form className='searchAPI'>
                  <div className='form-group'>
                    <h4 className='search-header'>Search a drink by Ingredient!</h4>
                    <Select name='ingredient' className='form-control' id='ingrdient' onChange={this.handleInputChange4} value={this.state.ingredient}>
                      <option>Tea</option>
                      <option>Sugar</option>
                      <option>demerara Sugar</option>
                      <option>Lime juice</option>
                      <option>Carbonated water</option>
                      <option>Grapefruit juice</option>
                      <option>Apple juice</option>
                      <option>Pineapple juice</option>
                      <option>Lemon juice</option>
                      <option>Sugar syrup</option>
                      <option>Milk</option>
                      <option>Strawberries</option>
                      <option>Chocolate syrup</option>
                      <option>Yoghurt</option>
                      <option>Mango</option>
                      <option>Ginger</option>
                      <option>Lime</option>
                      <option>Cantaloupe</option>
                      <option>Berries</option>
                      <option>Grapes</option>
                      <option>Kiwi</option>
                      <option>Tomato juice</option>
                      <option>Cocoa powder</option>
                      <option>Chocolate</option>
                      <option>Heavy cream</option>
                      <option>Coffee</option>
                      <option>Water</option>
                      <option>Espresso</option>
                      <option>Angelica root</option>
                      <option>Orange</option>
                      <option>Cranberries</option>
                      <option>Apple cider</option>
                      <option>Cranberry juice</option>
                      <option>Egg yolk</option>
                      <option>Egg</option>
                      <option>Grape juice</option>
                      <option>Peach nectar</option>
                      <option>Lemon</option>
                      <option>Lemonade</option>
                      <option>Sprite</option>
                      <option>7-Up</option>
                      <option>Kool-Aid</option>
                      <option>Orange juice</option>
                      <option>Chocolate ice-cream</option>
                      <option>Mint</option>
                      <option>Ice</option>
                      <option>Sour mix</option>
                      <option>Vanilla ice-cream</option>
                      <option>Fruit punch</option>
                      <option>Coca-Cola</option>
                      <option>Lemon peel</option>
                      <option>Grape Soda</option>
                      <option>Hot Chocolate</option>
                    </Select>
                  </div>
                  <FormBtn className='my-2 my-sm-0' onClick={this.handleSubmit4}>Search</FormBtn>
                </form>
              </div>
              <div className='col-sm-4'>
                <form className='searchAPI'>
                  <div className='form-group'>
                    <h4 className='search-header'>Search a drink by Glass!</h4>
                    <Select name='glass' className='form-control' id='glass' onChange={this.handleInputChange5} value={this.state.glass}>
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
                  <FormBtn className='my-2 my-sm-0' onClick={this.handleSubmit5}>Search</FormBtn>
                </form>
              </div>
            </div>
            <div className='row'>
              {this.state.drinks.map(drink => {
                return (
                  <div className='card-drinks mb-3'>
                    <div className='row no-gutters'>
                      <div className='col-md-3'>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} className='card-img'>
                        </img>
                      </div>
                      <div className='col-md-7'>
                        <div className='card-body'>
                          <h5 className='card-title'><h4>{drink.strDrink}</h4></h5>
                          <p className='card-text'><h5>{drink.strAlcoholic} - {drink.strCategory}</h5>
                            <p className='card-text'> <p><strong>Ingredients: </strong>{drink.strIngredient1} {drink.strMeasure1}, {drink.strIngredient2} {drink.strMeasure2}, {drink.strIngredient3} {drink.strMeasure3}, {drink.strIngredient4} {drink.strMeasure4}, {drink.strIngredient5} {drink.strMeasure5}, {drink.strIngredient6} {drink.strMeasure6}, {drink.strIngredient7} {drink.strMeasure7}, {drink.strIngredient8} {drink.strMeasure8}, {drink.strIngredient9} {drink.strMeasure9}, {drink.strIngredient10} {drink.strMeasure10}</p>
                              {/* <p className='card-text'> <p><strong>Ingredients:</strong><ul id="menu"><li>{drink.strIngredient1} {drink.strMeasure1}</li><li>{drink.strIngredient2} {drink.strMeasure2}</li><li>{drink.strIngredient3} {drink.strMeasure3}</li><li>{drink.strIngredient4} {drink.strMeasure4}</li><li>{drink.strIngredient5} {drink.strMeasure5}</li><li>{drink.strIngredient6} {drink.strMeasure6}</li><li>{drink.strIngredient7} {drink.strMeasure7}</li><li>{drink.strIngredient8} {drink.strMeasure8}</li><li>{drink.strIngredient9} {drink.strMeasure9}</li><li>{drink.strIngredient10} {drink.strMeasure10}</li></ul></p> */}
                              <p><strong>Instructions:</strong> {drink.strInstructions}</p> <p><strong>Glass: </strong>{drink.strGlass}</p> </p></p>
                          <p className='card-text'><small className='text-muted'></small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AllSearch;

