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
          <h2 className='pages-header'>Pineapple Martini</h2>
          <br />
          <div className='container-pineapple'>
          <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                <Link to='/featured'><img className='img-featured' src={top2} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h2 className='pages-header'>Pineapple Martini</h2>
                </div>
              </div>
            </div><div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>Custom column padding</div>
                <div className='col py-3 px-lg-5'>Custom column padding</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PineappleMartini;
