import React, { useState } from 'react';
import DrawModal from "../../components/drawModal/draw"
import "./Home.css"
import { Carousel } from 'react-bootstrap'

function HomePage(props) {

  const [show, setShow] = useState(false)


  const handleShow = () => setShow(true)


  return (<>
    <div className="row">
      <div className="col mb-5">

        <div className="jumbotron">
          <h1 className="display-4">Baton Pass!</h1>
          <p className="lead">instruction on what to do/or what the site is about</p>
        </div>
      </div>
    </div>

    <div className="container">

      <div className="row">
        <div className="col-9 move-right">

          <Carousel interval="10000">
            {props.homeGallery.map((image) =>

              <Carousel.Item>
                <div>
                  <DrawModal image={image.image} src={image.image} alt={"image.alt"} key={image.name} />
                  <img className="img-fluid" src={image.image} alt={image.alt} />
                </div>


                {console.log(image)}
              </Carousel.Item>)}
          </Carousel>
          <button onClick={handleShow} className="btn btn drawbtn">Draw Me</button>
        </div>
      </div>
    </div>
    <footer className="home-footer">
      copyright...
   </footer>


  </>
  );
}


export default HomePage;
