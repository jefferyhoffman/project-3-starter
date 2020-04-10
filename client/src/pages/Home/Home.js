import React from 'react';
import DrawModal from "../../components/drawModal/draw"
import "./Home.css"
import { Carousel } from 'react-bootstrap'

function HomePage(props) {

  return (<div>
    <div className="row">
      <div className="col mb-5">

        <div className="jumbotron">
          <h1 className="display-4">Baton Pass!</h1>
          <p className="lead">instruction on what to do/or what the site is about</p>
          <hr className="my-4" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-9">

        <Carousel interval="10000">
          {props.homeGallery.map((image) =>

            <Carousel.Item>
              <div>
                <img className="img-fluid" src={image.image} alt='timed slide' />
            </div>


              <DrawModal src={image.image} alt={"image.caption"} />
              {console.log(image)}
            </Carousel.Item>)}
        </Carousel>

      </div>
    </div>


  </div>
  );
}


export default HomePage;
