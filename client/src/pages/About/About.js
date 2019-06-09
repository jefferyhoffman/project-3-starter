import React, { Component } from "react";
import './about.css';



class About extends Component {
  render() {
    return (

      <div className="info">
        <br /><br />
        <div className="container" style={{ border: '.4' }}>
          <h1 style={{ background: 'transparent', color: 'black', border: 'black' }}>Meet Mr.Greenscapes Himself</h1>
          <br />
          <img src='./images/MrGHimself.jpg' style={{ width: '500px', opacity: '1.0' }} />
        </div>

        <h3>Born James Eugene Greenscapes in 1955 James was raised in Cut And Shoot, Texas. James always had a passion for the outdoors. His parents Alice and James Sr.
          gave him a toy push mower for his 5th birthday and the rest is history.  Cutting lawns professionally by 12 James went to University of
          Santa Curz for turf sciences from 1972-1976.   Immediately following graduation James and his brother Chase founded Greenscapes in 1976
          on the foundation of hard work, enginuity, and a passion for making America's lawns the best in the world.  Greenscapes still holds
          those values in high regards as we have expanded over the years.  Greenscapes has over 100 office locations thoroughout the south and is
          continuing to expand every year!
        </h3>

        < br ></br >
        {/* <ItemsCarousel> */}
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3">
              <h2>Words of Wisdom from James Greenscapes</h2>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            A beautiful lawn is the key to a beautiful life.
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            Hard Work is the key to success!
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            One Million Lawns Saved since 1976!
                             </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            Right or wrong, make a decision. The road 
                            <br />of life is paved with flat squirrels who 
                            <br />couldn't make a decision.
                            </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            I've never met a lawn Greenscapes couldn't 
                            <br />make the most beautiful one on the block!
                            </h4>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div classNameName="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default About;