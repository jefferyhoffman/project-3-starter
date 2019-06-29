import React, { Component } from 'react';
import pic4 from '../Images/pic4.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className='container'>
          <div className='card-about mb-4'>
            <div className='row no-gutters'>
              <div className='col-md-4'>
                <img src={pic4} className='card-img' alt='Drinks' />
              </div>
              <div className='col-md-7'>
                <div className='card-body-about'>
                  <h5 className='card-title'><h1 className='pages-header'>About Drinkstation</h1></h5>
                  <div className='row'>
                    <p className='card-text'>Drinkstation is an application for Beverage Lovers. Drink enthusiasts who love this craft.
                    Drinkstation helps a user by presenting our featured drinks and also they can search through our vast drinks collection.
                    Gives our user the option to create a drink which they love and add to our drinks collection to share with other enthusiasts.
                    They have an option to delete it if they wish to. DrinkStation is an great application for user explore, search, create, share and
                     experience drinks!</p>
                  </div>
                  <div className='row'>
                    <strong><p>Drinkstation is product of a group project by enthusiastic student developers channeling
                    their creativity through their passion for this craft.</p></strong>
                  </div>
                  <div className='row'>
                    <div className='col-5'>
                      <h3 className='portfolio'>Sahiba Ahuja</h3>
                      <p><a href='#' target='_blank' rel='noopener noreferrer'><i className="fas fa-portrait"></i> Portfolio</a></p>
                      <p><a href='https://github.com/sahibaahuja' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i> GitHub Repositories</a></p>
                    </div>
                    <div className='col-5'>
                      <h3 className='portfolio'>Ruchita Gandhe</h3>
                      <p><a href='https://ruchita-g.github.io/Portfolio' target='_blank' rel='noopener noreferrer'><i className="fas fa-portrait"></i> Portfolio</a></p>
                      <p><a href='https://github.com/Ruchita-G?tab=repositories' target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i> GitHub Repositories</a></p>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <p className='card-text'><small className='text-muted'>&copy;Copyright2019</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
