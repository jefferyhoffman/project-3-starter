import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import top from '../Images/top.jpg'
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class JeffTheCodeGuru extends Component {
  render() {
    return (
      <>
        <div>
          {/* <h2 className='pages-header'>Jeff The Code Guru</h2> */}
          <br />
          <div className='container-jeff'>
            <div className='container-featured px-lg-5'>
              <div className='row mx-lg-n5'>
                <div className='col py-3 px-lg-5'>
                <Link to='/featured'><img className='img-featured' src={top} alt='Jeff The Code Guru Drink' /></Link>
                </div>
                <div className='col py-3 px-lg-5'>
                  <br/>
                  <h2 className='pages-header'>Jeff 'The Code Guru</h2>
                  <br/>
                  <h4>In honour of our phenomenal 'Guru' Jeffery Hoffman! Thank you Jeff for believing in us when we doubted ourselves! “A teacher affects eternity; he can never tell where his influence stops.” -Henry Adams.</h4>
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

export default JeffTheCodeGuru;
