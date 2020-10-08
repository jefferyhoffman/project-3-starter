import React from 'react';
// import clapping1 from '../Carousel/clapping1.jpg'
import gk from '../../pages/Images/george3.jpg'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBMask, MDBTypography} from
"mdbreact";
import '../Carousel/caro.css'

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="4">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <MDBTypography  className="text-right" tag="h3" variant="display-3">Meet The</MDBTypography>
      </MDBCol>
        <MDBCol md="4">
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
      <MDBCol md="4">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <MDBTypography className="text-left" tag="h3" variant="display-3">Athletes</MDBTypography>

      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Carousel;

{/* <MDBTypography  className="text-left align-bottom" tag="h3" variant="display-3"><span className="letters">F</span>alse</MDBTypography>
<MDBTypography className="text-left align-middle" tag="h3" variant="display-3"><span className="letters">E</span>vidence</MDBTypography>
<MDBTypography className="text-left align-middle" tag="h3" variant="display-3"><span className="letters">A</span>ppearing</MDBTypography>
<MDBTypography className="text-left align-middle" tag="h3" variant="display-3"><span className="letters">R</span>eal</MDBTypography> */}