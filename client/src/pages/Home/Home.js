import React, { Component } from "react";
import FlashMessage from "react-flash-message";
import { Scrollbars } from 'react-custom-scrollbars';

// import logo from "./logo.svg";
// import MainGrass from "../../images/MainGrass.jpg";
// import overlayImage1 from "../../images/rotatedTransparentSaw.png";
import overlayImage1 from "../../images/BGM_LOGO_10.11.17_1038697311177295.png";
import AuthContext from "../../contexts/AuthContext";
import mower from "../../images/LawnMower.jpeg";


class HomePage extends Component {
  render() {
    return (

      <Scrollbars autoHeight autoHeightMin="100vh">
        <div className="Home">
          <div className="parallax parallax-1">
            <div className="container">
              <div className="row">

                {this.props.status.success &&
                  <div className='row' style={{zIndex:10}}>
                    <div className='col centeredContent' style={{marginTop:"-150px"}}>
                      <FlashMessage duration={5000}>
                        <div className='alert alert-success mb-3' role='alert'>
                          {this.props.status.success}
                        </div>
                      </FlashMessage>
                    </div>
                  </div>}


                <div className="centeredContent">
                  <img className="overlayImage" src={overlayImage1} />
                  <h1 className="phrase">Charlotte & Surrounding Area's Premier Commercial Landscaping Company</h1>
                </div>
        </div>
        </div>
        </div>
        </div>

        

        <div className="parallax parallax-2">

          <div className="container">
            <div className="row">
              <div className="centeredContent">
                <p class="services">
                  <h1 style={{textAlign: "center", fontStyle: "bold"}}>Services</h1>
                  <ul>
                    <li>Commercial Landscape Maintenance</li>
                    <li>Truck Court Maintentance</li>
                    <li>Plant Design and Installation</li>
                    <li>Weed Control</li>
                    <li>Seasonal Flower Installation</li>
                    <li>Aeration and Seeding</li>
                    <li>Pine Needles</li>
                    <li>Mulching</li>
                    <li>Leaf Removal</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax parallax-3">
          <div className="container">
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
          <div className="parallax parallax-3">
            <div className="container">
              <div className="row">
                <div className="centeredContent">
                  <p class="mission">
                    Our mission is to provide our clients with the highest level
                    of quality services at fair and competitive prices. We believe
                    that by providing our clients with exceptional workmanship,
                    extraordinary service and professional integrity, we’ll ensure
                    the longevity of our company through repeat and referral
                    business
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </Scrollbars>
    );
  }
}

export default HomePage;
