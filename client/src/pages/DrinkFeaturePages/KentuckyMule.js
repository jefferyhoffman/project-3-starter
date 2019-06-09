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
          {/* <h2 className='pages-header'>Kentucky Mule</h2> */}
          <br />
          <div className='container-mule'>
          <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                <Link to='/featured'><img className='img-featured' src={top1} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h2 className='pages-header'>Kentucky Mule</h2>
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

export default KentuckyMule;
