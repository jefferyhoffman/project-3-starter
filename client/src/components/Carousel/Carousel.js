import React from 'react';
// import clapping1 from '../Carousel/clapping1.jpg'
import gk from '../../pages/Images/george3.jpg'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBMask} from
"mdbreact";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
        // className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView waves>
              <img
                className="rounded"
                src={gk}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView waves>
              <img
                className="rounded"
                src={gk}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView waves>
              <img
                className="rounded"
                src={gk}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBCol>
      <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Carousel;