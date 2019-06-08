import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Home/home.css'

import img from '../Images/img.jpg';
import jumbo1 from '../Images/jumbo1.jpg';
import jumbo4 from '../Images/jumbo4.jpg';
import jumbo6 from '../Images/jumbo6.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='row-jumbo'>
          <div className='col-12'>
            <div className='jumbotron jumbotron-fluid'>
              <div className='bd-example'>
                <div id='carouselExampleCaptions' className='carousel slide carousel-fade' data-ride='carousel'>
                  <ol className='carousel-indicators'>
                    <li data-target='#carouselExampleCaptions' data-slide-to='1' className='active'></li>
                    <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
                    <li data-target='#carouselExampleCaptions' data-slide-to='3'></li>
                    <li data-target='#carouselExampleCaptions' data-slide-to='4'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img src={jumbo1} className='responsive-d-block w-100' alt='...'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1>Explore</h1>
                        <h4>There is so much more to drinks!</h4>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={jumbo4} className='responsive-d-block w-100' alt='...'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1>Create</h1>
                        <h4>Add your favroite drink!</h4>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={img} className='responsive-d-block w-100' alt='...'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1>Search</h1>
                        <h4>Find your drink!</h4>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={jumbo6} className='responsive-d-block w-100' alt='...'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1>Experience</h1>
                        <h4>Live it up!</h4>
                      </div>
                    </div>
                  </div>
                  <Link className='carousel-control-prev' to='#carouselExampleCaptions' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                  </Link>
                  <Link className='carousel-control-next' to='#carouselExampleCaptions' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default HomePage;
