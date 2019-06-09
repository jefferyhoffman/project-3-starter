import React, { Component } from 'react';
import top1 from '../Images/top1.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class KentuckyMule extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-mule'>
          <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                <Link to='/featured'><img className='img-featured' src={top1} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h1 className='pages-header'>Kentucky Mule</h1>
                  <h3>Alcoholic - Cocktail</h3>
                  <br />
                  <h3>A bourbon take of Moscow Mule has exploded everywhere and is one the most popular drinks around. We think it's here to stay for a long time</h3>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <h3>Ingredients:</h3>
                  <h4>Bourbon or Whiskey 2-oz</h4>
                  <h4>Ginger beer 4-oz</h4>
                  <h4>Fresh lime juice</h4>
                  <h4>Fresh mint and lime wedge to garnish</h4>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h3>Instructions:</h3>
                  <h4>Fill a copper mug with ice Pour in the bourbon and lime juice. Top it off with ginger beer: Give it a quick stir. Garnish and serve</h4>
                  <h3>Glass:</h3>
                  <h4>Copper mug</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default KentuckyMule;
