import React, { Component } from 'react';
import top4 from '../Images/top4.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class BabyGuinness extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-baby'>
            <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <Link to='/featured'><img className='img-featured' src={top4} alt='Featured Drink' /></Link>
                </div>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h1 className='pages-header'>Baby Guinness</h1>
                  <h3>Alcoholic - Shot</h3>
                  <br />
                  <h3>Baby Guinness Shots are perfect blend of coffee and creme base liquor! We find it one of the best tasting shot whichs looks amazing cool.</h3>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h3>Ingredients:</h3>
                  <h4>4/5 shot Patron XO Cafe</h4>
                  <h4>1/5 Shot Bailey's Irish cream</h4>
                </div>
                <div className='col-sm-6 py-3 px-lg-5'>
                  <h3>Instructions:</h3>
                  <h4>First off you need to chill the Patron. Your goal here is to add the Bailey's very carefully without pouring in, or you will not have a layer on top.
The way that you are going to get this effect is with a spoon. You put a spoon up side down over the shot glass, and very carefully and slowly pour the Bailey's into the glass. This will allow you to get the layer effect that will give a look similar to a Guinness Draft beer.</h4>
                  <h3>Glass:</h3>
                  <h4>Shot glass</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BabyGuinness;
