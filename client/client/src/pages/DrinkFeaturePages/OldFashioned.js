import React, { Component } from 'react';
import top3 from '../Images/top3.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class OldFashioned extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className='pages-header'>Old Fashioned</h2>
          <br />
          <div className='container-old'>
          <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                  <Link><img className='img-featured' src={top3} alt='Featured Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <h2 className='pages-header'>Old Fashioned</h2>
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

export default OldFashioned;
