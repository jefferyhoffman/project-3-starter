import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../Home/home.css"

import img from "../Images/img.jpg";
import top1 from "../Images/top1.jpg";
import top2 from "../Images/top2.jpg";
import top3 from "../Images/top3.jpg";
import top4 from "../Images/top4.jpg";
import jumbo1 from "../Images/jumbo1.jpg";
import jumbo2 from "../Images/jumbo2.jpg";
import jumbo3 from "../Images/jumbo3.jpg";
import jumbo4 from "../Images/jumbo4.jpg";
import jumbo5 from "../Images/jumbo5.jpg";
import jumbo6 from "../Images/jumbo6.jpg";
import jumbo7 from "../Images/jumbo7.jpg";
import jumbo8 from "../Images/jumbo8.jpg";
import jumbo9 from "../Images/jumbo9.jpg";
import jumbo10 from "../Images/jumbo10.jpg";
import jumbo11 from "../Images/jumbo11.jpg";






class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="row-jumbo">
          <div className="col-12">
            <div className="jumbotron jumbotron-fluid">
              <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Explore</h1>
                        <h4>There is so much more to drinks!</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={jumbo1} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Create</h1>
                        <h4>Add your favroite "drink"!</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={jumbo6} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Search</h1>
                        <h4>Find your "drink"!</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={jumbo4} className="d-block w-100" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Experience</h1>
                        <h4>Live it up!</h4>
                      </div>
                    </div>
                  </div>
                  <Link className="carousel-control-prev" to="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </Link>
                  <Link className="carousel-control-next" to="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-text-center">
            <div className="card-header"><h3>Drinks we Love!</h3></div>
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <div className="card-top">
                    <img src={top1} className="card-img-top" alt={"drink"}></img>
                    <div className="card-body">
                      <h5 className="card-title">Moscow Mule</h5>
                      <p className="card-text">This drink has exploded everywhere being one the most popular drinks around. We think it's here to stay for a long time</p>
                      {/* <Link to="#" className="btn btn-primary">Want More</Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card-top">
                    <img src={top2} className="card-img-top" alt={"drink"}></img>
                    <div className="card-body">
                      <h5 className="card-title">Pineapple Martini</h5>
                      <p className="card-text">Pineapple Infused Vodka Martini is one for connoisseurs who take their craft seriouly. Patience and hard work do pay off We say.</p>
                      {/* <Link to="#" className="btn btn-primary">Want More</Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card-top">
                    <img src={top3} className="card-img-top" alt={"drink"}></img>
                    <div className="card-body">
                      <h5 className="card-title">Old Fashioned</h5>
                      <p className="card-text">Classy, timeless  and loved across generations. We can safely claim good 'old Old Fashioned is never gonna be out of style.</p>
                      {/* <Link to="#" className="btn btn-primary">Want More</Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card-top">
                    <img src={top4} className="card-img-top" alt={"drink"}></img>
                    <div className="card-body">
                      <h5 className="card-title">Baby Guinness</h5>
                      <p className="card-text">Baby Guinness Shots are perfect blend of coffee and creme base liquor! We find it one of the best tasting shot whichs looks amazing cool.</p>
                      {/* <Link to="#" className="btn btn-primary">Want More</Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div>
          <div className="card-footer text-muted">
            <Link to="#">Go to our Top Drinks Page for more!</Link>
          </div>
        </div>
      </div >
    );
  }
}

export default HomePage;
