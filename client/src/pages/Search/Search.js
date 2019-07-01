import React, { Component } from 'react';
import { Input, Select, FormBtn } from "../../components/Form";
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';
import '../Search/search.css';

import pic from "../Images/pic.jpg";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import pic6 from "../Images/pic6.jpg";
import pic7 from "../Images/pic7.jpg";
import pic8 from "../Images/pic8.jpg";
import pic9 from "../Images/pic9.jpg";
import pic10 from "../Images/pic10.jpg";
import pic11 from "../Images/pic11.jpg";
import pic12 from "../Images/pic12.jpg";
import pic13 from "../Images/pic13.jpg";
import pic14 from "../Images/pic14.jpg";

class Search extends Component {
  static contextType = AuthContext;

  render() {

    return (
      <>
        <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h2 className='pages-header'>Be Your own Bartender</h2>
              <h4>Click on a Category to find your drink</h4>
              <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="10"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="11"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="12"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="13"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="14"></li>
                  </ol>
                  <div className="carousel-inner">

                    <div className="carousel-item active">
                      <img src={pic} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Spirited Drinks</h1>
                        <h2>Alchoholic drink that suits your Spirit!</h2>
                      </div>
                    </div>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic1} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Non-Alcoholic</h1>
                        <h2>Look for the one that speaks to you!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic2} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Optional-Alcohol</h1>
                        <h2>To be or not to be!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic3} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Cocktail</h1>
                        <h2>Shake it up!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic4} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Shot</h1>
                        <h2>That's called a party!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic5} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Mixed Drinks</h1>
                        <h2>It's not complicated!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic6} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Unknown Drinks</h1>
                        <h2>Don't belive in labels!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic7} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Homemade Liqueur</h1>
                        <h2>That's gonna be good!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic8} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Punch/Party Drink</h1>
                        <h2>Let's get this Party started!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic9} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Beer</h1>
                        <h2>Always Chill!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic10} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Soda</h1>
                        <h2>Love the Fizz!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic11} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Coffe/Tea</h1>
                        <h2>Cafe is your thing!</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={pic12} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Cocoa</h1>
                        <h2>Death by choclate!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic13} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Milk/Float</h1>
                        <h2>Inspired by Diners maybe!</h2>
                      </div>
                    </div>
                    </Link>
                    <Link to='/allsearch'>
                    <div className="carousel-item">
                      <img src={pic14} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Your Secret Ingredient</h1>
                        <h2>Reveal your secrect ingrdient and we shall have some drinks!</h2>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Search;
