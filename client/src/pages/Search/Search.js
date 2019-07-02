import React, { Component } from 'react';
import { Input, Select, FormBtn } from "../../components/Form";
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import APISearch from '../../lib/APISearch';
import '../Search/search.css';

class Search extends Component {
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

  handleSubmitEmpty = event => {
    this.setState({ drinks: [], });
  }

  // handleInputChange = event => {
  //   this.setState({ drinks: [], name: event.target.value });
  // }

  // handleInputChange1 = event => {
  //   this.setState({ drinks: [], kind: event.target.value });
  // }

  // handleInputChange2 = event => {
  //   this.setState({ drinks: [], category: event.target.value });
  // }

  // handleInputChange3 = event => {
  //   this.setState({ drinks: [], liquor: event.target.value });
  // }

  // handleInputChange4 = event => {
  //   this.setState({ drinks: [], ingredient: event.target.value });
  // }

  // handleInputChange5 = event => {
  //   this.setState({ drinks: [], glass: event.target.value });
  // };

  handleSubmit0 = (event) => {
    
      this.setState({ drinks: [], });
    
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

  // handleSubmit = (event) => {
  //   APISearch.searchByName(this.state.name)
  //     .then((response) => {
  //       this.setState(
  //         console.log(response.data.drinks),
  //         this.setState(
  //           { drinks: response.data.drinks }
  //         )
  //       )
  //     })
  //     .catch(err => console.log(err));
  // }

  handleSubmit1 = (event) => {

    this.setState({ drinks: [], });

    APISearch.searchByKind('Alcoholic')
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
    this.setState({ drinks: [], });

    APISearch.searchByKind('Non_Alcoholic')
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

    this.setState({ drinks: [], });

    APISearch.searchByKind("Optional alcohol")
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
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Cocktail")
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
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Other/Unknown")
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

  handleSubmit6 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Ordinary Drink")
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

  handleSubmit7 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Shot")
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

  handleSubmit8 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Homemade Liqueur")
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

  handleSubmit9 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Punch / Party Drink")
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

  handleSubmit10 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Beer")
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

  handleSubmit11 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Soft Drink / Soda")
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

  handleSubmit11 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Soft Drink / Soda")
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

  handleSubmit11 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Soft Drink / Soda")
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

  handleSubmit12 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Coffee / Tea")
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

  handleSubmit13 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Cocoa")
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
  
  handleSubmit14 = (event) => {
    this.setState({ drinks: [], });

    APISearch.searchByCategory("Milk / Float / Shake")
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
          <Link to='top'/>
          <div className='row'>
            {this.state.drinks.map(drink => {
              return (
                <div className='card-drinks mb-3 searchrow'>
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
                            <p><strong>Instructions:</strong> {drink.strInstructions}</p> <p><strong>Glass: </strong>{drink.strGlass}</p> </p></p>
                        <p className='card-text' style={{ color: '#ff0000', textAlign: 'end' }}><small className='text-muted'></small>
                          <button className="searchbtn" onClick={this.handleSubmitEmpty}>
                            <h4>Back to Search</h4>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <main className="wrapper">
            <section className="section parallax bg1">
            </section>
            <section className="section static">
              <button className='searchbtn' style={{}} onClick={this.handleSubmit1}>
                <Link to='#top'>
                  <h1 className='searchmain'>Spirited Drinks</h1>
                  <h3 className='tag-search'>Alchoholic drink that suits your Spirit!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg2">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit2}>
                <Link to='#top'>
                  <h1 className='searchmain'>Non-Alcoholic</h1>
                  <h3 className='tag-search'>Look for the one that speaks to you!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg3">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit3}>
                <Link to='#top'>
                  <h1 className='searchmain'>Optional-Alcohol</h1>
                  <h3 className='tag-search'>To be or not to be!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg4">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit4}>
                <Link to='#top'>
                  <h1 className='searchmain'>Cocktails</h1>
                  <h3 className='tag-search'>Shake it up!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg5">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit5}>
                <Link to='#top'>
                  <h1 className='searchmain'>Unknown Drinks</h1>
                  <h3 className='tag-search'>Don't belive in labels!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg6">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit6}>
                <Link to='#top'>
                  <h1 className='searchmain'>Mixed Drinks</h1>
                  <h3 className='tag-search'>It's not complicated!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg7">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit7}>
                <Link to='#top'>
                  <h1 className='searchmain'>Shots</h1>
                  <h3 className='tag-search'>That's called a party!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg8">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit8}>
                <Link to='#top'>
                  <h1 className='searchmain'>Homemade Liqueur</h1>
                  <h3 className='tag-search'>That's gonna be good!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg9">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit9}>
                <Link to='#top'>
                  <h1 className='searchmain'>Punch/Party Drink</h1>
                  <h3 className='tag-search'>Let's get this Party started!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg10">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit10}>
                <Link to='#top'>
                  <h1 className='searchmain'>Beer</h1>
                  <h3 className='tag-search'>Always Chill!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg11">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit11}>
                <Link to='#top'>
                  <h1 className='searchmain'>Soda</h1>
                  <h3 className='tag-search'>Love the Fizz!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg12">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit12}>
                <Link to='#top'>
                  <h1 className='searchmain'>Coffe/Tea</h1>
                  <h3 className='tag-search'>Cafe is your thing!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg13">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit13}>
                <Link to='#top'>
                  <h1 className='searchmain'>Cocoa</h1>
                  <h3 className='tag-search'>Death by choclate!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg14">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit14}>
                <Link to='#top'>
                  <h1 className='searchmain'>Milk/Float</h1>
                  <h3 className='tag-search'>Inspired by Diners maybe!</h3>
                </Link>
              </button>
            </section>
            <section className="section parallax bg15">
            </section>
            <section className="section static">
              <button className='searchbtn' onClick={this.handleSubmit0}>
                <Link to='#top'>
                  <h1 className='searchmain'>Drink a random</h1>
                  <h3 className='tag-search'>In for a surprise!</h3>
                </Link>
              </button>
            </section>
          </main>
        </div>
      </>

    );
  }
}

export default Search;

