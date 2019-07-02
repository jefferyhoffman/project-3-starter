import React, { Component } from 'react';
import '../DrinkFeaturePages/drinkfeaturepages.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class SherbetMimosa extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-mimosa'>
            <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <Link to='/featured'><img className='img-featured' src={top5} alt='Featured Drink' /></Link>
                </div>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h2 className='pages-header'>Sherbet Mimosa</h2>
                  <h3>Optional-Alcohol - Cocktail</h3>
                  <br />
                  <h3>Sherbet Mimosa's are the best, perfect for any brunch occasion! You can make it with any color or flavor sherbet, We say it's a must try!</h3>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h3>Ingredients:</h3>
                  <h4>4 smalls scoops of your favorite sherbet sorbet, or ice cream</h4>
                  <h4>Any type of champagne</h4>
                  <h4>Fresh fruit for garnish</h4>
                  <h4>1 tablespoon clementine vodka - optional</h4>
                </div>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h3>Instructions:</h3>
                  <h4>Fill your glass with 4 small scoops of sherbet or sorbet. Top with vodka if using. Top with champagne and garnish with fresh fruit. For Non-Alcoholic Mimosa, just switch out the champagne for 7 Up or another bubbly beverage. Enjoy!</h4>
                  <h3>Glass:</h3>
                  <h4>Champagne flute</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default SherbetMimosa;
