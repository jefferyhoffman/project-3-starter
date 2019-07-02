import React, { Component } from 'react';
import top2 from '../Images/top2.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class PineappleMartini extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-pineapple'>
          <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col-sm-6 py-3 px-lg-5'>
                <Link to='/featured'><img className='img-featured' src={top2} alt='Featured Drink' /></Link>
                </div>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h1 className='pages-header'>Pineapple Martini</h1>
                  <h3>Alcoholic - Cocktail</h3>
                  <br />
                  <h3>Pineapple Infused Vodka Martini is one for connoisseurs who take their craft seriouly. Patience and hard work do pay off We say.</h3>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h3>Ingredients:</h3>
                  <h4>Vodka</h4>
                  <h4>Pineapple chunks</h4>
                  <h4>Fresh pineapple pieces for garnish</h4>
                  <h4>Pineapple juice or simple syrup - optional</h4>
                </div>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h3>Instructions:</h3>
                  <h4>Just cut the pineapple into chunks and pour the vodka over it. I let mine infuse at room temperature for 14 to 21 days before straining it and pouring it into bottles. Shake 4 0z of your pineapple infused vodka with ice in martini Shaker, pour in galss and enjoy! </h4>
                  <h3>Glass:</h3>
                  <h4>Martini glass</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PineappleMartini;
