import React, { Component } from 'react';
import top3 from '../Images/top3.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class OldFashioned extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-old'>
            <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <Link to='/featured'><img className='img-featured' src={top3} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h1 className='pages-header'>Old Fashioned</h1>
                  <h3>Alcoholic - Cocktail</h3>
                  <br />
                  <h3>Classy, timeless  and loved across generations. We can safely claim good 'old Old Fashioned is never gonna be out of style.</h3>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <h3>Ingredients:</h3>
                  <h4>2 ounces mid-range bourbon or rye whiskey</h4>
                  <h4>2 teaspoons simple Syrup</h4>
                  <h4>3 dashes Bitters</h4>
                  <h4>One 2-inch piece of orange peel</h4>
                  <h4>1 to 2 maraschino Cherries</h4>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h3>Instructions:</h3>
                  <h4>Place simple syrup, bitters and the whiskey in an Old Fashioned glass, stir well then add 1 to 2 large ice cubes. Stir 2 to 3 times to chill then garnish with peel of orange and cherry.</h4>
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

export default OldFashioned;

