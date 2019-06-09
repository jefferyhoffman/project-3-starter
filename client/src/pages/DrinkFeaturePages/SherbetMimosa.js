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
          <h2 className='pages-header'>Sherbet Mimosa</h2>
          <br />
          <div className='container-mimosa'>
            <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                <Link to='/featured'><img className='img-featured' src={top5} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h2 className='pages-header'>Sherbet Mimosa</h2>
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

export default SherbetMimosa;
