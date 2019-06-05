import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pic from "../Images/pic.jpg";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";
import pic6 from "../Images/pic6.jpg";
import pic7 from "../Images/pic7.jpg";
import pic8 from "../Images/pic8.jpg";
import pic9 from "../Images/pic9.jpg";
import pic10 from "../Images/pic10.jpg";
import pic11 from "../Images/pic11.jpg";
import pic12 from "../Images/pic12.jpg";
// import pic13 from "../Images/pic13.jpg";
// import pic14 from "../Images/pic14.jpg";

// import logo from './logo.svg';



class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">

        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="1" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="10"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="11"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="12"></li>

            </ol>
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={pic1} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Explore</h3>
                  <h6>There is so much more to drinks!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic2} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Create</h3>
                  <h6>Add your favroite "drink"!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic3} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Search</h3>
                  <h6>Find your "drink"!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic4} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Experience</h3>
                  <h6>Try our!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic5} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Explore</h3>
                  <h6>There is so much more to drinks!</h6>>
                  </div>
              </div>
              <div className="carousel-item">
                <img src={pic6} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Create</h3>
                  <h6>Add your favroite "drink"!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic7} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Search</h3>
                  <h6>Find your "drink"!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic8} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Experience</h3>
                  <h6>Try our!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic9} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Explore</h3>
                  <h6>There is so much more to drinks!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic10} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Create</h3>
                  <h6>Add your favroite "drink"!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic11} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Search</h3>
                  <h6>Find your "drink"!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic12} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Experience</h3>
                  <h6>Try our!</h6>
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
        {/* <div className="row">
          <ul className="list-inline">
            <li className="list-inline-item">
              <div className="col-3">
              <div className="card">
                <img src={{ pic }} className="card-img-top" alt={"drink"}></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>

              </div>
            </li>
            <li className="list-inline-item">
              <div className="col-3">
              <div className="card">
                <img src={{ pic1 }} className="card-img-top" alt={"drink"}></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="col-3">
              <div className="card">
                <img src={{ pic2 }} className="card-img-top" alt={"drink"}></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="col-3">
              <div className="card">
                <img src={{ pic }} className="card-img-top" alt={"drink"}></img>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
              </div>
            </li>
          </ul >
        </div> */}
      </div >
    );
  }
}

export default HomePage;
