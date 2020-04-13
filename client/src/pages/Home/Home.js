import React, { useState } from 'react';
import DrawModal from "../../components/drawModal/draw"
import "./Home.css"
import { Carousel } from 'react-bootstrap'

function HomePage(props) {

  const [show, setShow] = useState(false)


  const handleShow = () => setShow(true)


  return (
  <div>
    <div className='title'>
      <h1 className='abel translate-up'>Baton Pass!</h1>
      <p className='titilium translate-up'>The pleasure of drawing. One pass at a time.</p>
    </div>

    <div className="container">

      <div className="row">
        <div className="col-9 move-right fade-in">

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

  </div>
  );
}


export default HomePage;
