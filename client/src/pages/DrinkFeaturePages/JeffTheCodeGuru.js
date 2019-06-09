import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import top from '../Images/top.jpg'
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class JeffTheCodeGuru extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-jeff'>
            <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <Link to='/featured'><img className='img-featured' src={top} alt='Jeff The Code Guru Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <br />
                  <h1 className='pages-header'>Jeff 'The Code Guru'</h1>
                  <h3>Alcoholic - Cocktail</h3>
                  <br />
                  <h3>Our mocha take on White Russian! In honour of our phenomenal 'Guru' Jeffery Hoffman! It's one of his favroites! It's our way of thanking Jeff for believing in us when we doubted ourselves! “A teacher affects eternity; he can never tell where his influence stops.” -Henry Adams.</h3>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <h3>Ingredients:</h3>
                  <h4>1/4 cup light-brown sugar</h4>
                  <h4>2 tablespoons espresso powder</h4>
                  <h4>plus a dash for serving</h4>
                  <h4>1 tablespoon cocoa powder</h4><h4>2 cups milk</h4>
                  <h4>1/2 cup heavy cream</h4>
                  <h4>1/4 cup vodka</h4>
                  <h4>Whipped cream</h4>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h3>Instructions:</h3>
                  <h4>In a pot, combine sugar, 2 tablespoons espresso powder, and cocoa powder. Whisk in milk, heavy cream, and vodka; heat until almost boiling. Serve with whipped cream and a dash of espresso powder.</h4>
                  <h3>Glass:</h3>
                  <h4>Old Fashioned glass</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JeffTheCodeGuru;
