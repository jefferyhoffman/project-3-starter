import React, { Component } from 'react';
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
import pic13 from "../Images/pic13.jpg";
import pic14 from "../Images/pic14.jpg";

// import logo from './logo.svg';



class HomePage extends Component {
  render() {
    return (

      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1>Be Your own Bartender</h1>
        <h4>Pick a spirit and select a drink for you to make</h4>
        <div className="bd-example">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
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
              <li data-target="#carouselExampleCaptions" data-slide-to="13"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="14"></li>
            </ol>
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img src={pic} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Spirited Drinks</h3>
                  <h6>Alchoholic drink that suits your Spirit!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic1} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Non-Alcoholic</h3>
                  <h6>Look for the one that speaks to you!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic2} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Optional-Alcohol</h3>
                  <h6>To be or not to be!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic3} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Cocktail</h3>
                  <h6>Shake it up!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic4} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Shot</h3>
                  <h6>That's called a party!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic5} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Mixed Drinks</h3>
                  <h6>It's not complicated!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic6} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Unknown Drinks</h3>
                  <h6>Don't belive in labels!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic7} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Homemade Liqueur</h3>
                  <h6>That's gonna be good!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic8} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Punch/Party Drink</h3>
                  <h6>Let's get this Party started!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic9} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Beer</h3>
                  <h6>Always Chill!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic10} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Soda</h3>
                  <h6>Love the Fizz!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic11} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Coffe/Tea</h3>
                  <h6>Cafe is your thing!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic12} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Cocoa</h3>
                  <h6>Death by choclate!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic13} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Milk/Float</h3>
                  <h6>Inspired by Diners maybe!</h6>
                </div>
              </div>
              <div className="carousel-item">
                <img src={pic14} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                  <h3>Your Secret Ingredient</h3>
                  <h6>Reveal your secrect ingrdient and we shall have some drinks!</h6>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>

      
      
      // <div className='Home'>
      //   <div className='row'>
      //     <div className='col'>
      //       <img src={logo} className='App-logo' alt='logo' />
      //       <p>
      //         Edit <code>src/pages/Home.js</code> and save to reload.
      //       </p>
      //       <a
      //         className='App-link'
      //         href='https://reactjs.org'
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default HomePage;
