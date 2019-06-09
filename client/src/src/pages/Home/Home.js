import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Home/home.css'

// import img from '../Images/img.jpg';
// import jumbo from '../Images/jumbo.jpg';
import jumbo1 from '../Images/jumbo1.jpg';
import jumbo3 from '../Images/jumbo3.jpg';
import jumbo4 from '../Images/jumbo4.jpg';
import jumbo6 from '../Images/jumbo6.jpg';
import jumbo11 from '../Images/jumbo11.jpg';

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
                    <li data-target='#carouselExampleCaptions' data-interval='30' data-slide-to='1' className='active'></li>
                    <li data-target='#carouselExampleCaptions' data-interval='30' data-slide-to='2'></li>
                    <li data-target='#carouselExampleCaptions' data-interval='30' data-slide-to='3'></li>
                    <li data-target='#carouselExampleCaptions' data-interval='30' data-slide-to='4'></li>
                    <li data-target='#carouselExampleCaptions' data-interval='30' data-slide-to='5'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img src={jumbo1} className='responsive-d-block w-100' alt='Drinks'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1 className='text'>Explore</h1>
                        <h2>There is so much more to drinks!</h2>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={jumbo4} className='responsive-d-block w-100' alt='Drinks'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1 className='text'>Create</h1>
                        <h2>Add your favroite drink!</h2>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={jumbo11} className='responsive-d-block w-100' alt='Drinks'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1 className='text'>Share</h1>
                        <h2>Make it known!</h2>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={jumbo3} className='responsive-d-block w-100' alt='Drinks'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1 className='text'>Search</h1>
                        <h2>Find your drink!</h2>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={jumbo6} className='responsive-d-block w-100' alt='Drinks'></img>
                      <div className='carousel-caption d-none d-md-block'>
                        <h1 className='text'>Experience</h1>
                        <h2>Live it up!</h2>
                      </div>
                    </div>
                  </div>
                  {/* <Link className='carousel-control-prev' to='#carouselExampleCaptions' role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                  </Link>
                  <Link className='carousel-control-next' to='#carouselExampleCaptions' role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                  </Link> */}
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
