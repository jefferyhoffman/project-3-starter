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
          <h2 className='pages-header'>Baby Guinness</h2>
          <br />
          <div className='container-baby'>
          <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <Link to='/featured'><img className='img-featured' src={top4} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h2 className='pages-header'>Baby Guinness</h2>
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

export default BabyGuinness;
