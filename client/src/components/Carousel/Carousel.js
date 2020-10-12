import React from 'react';
import gk from '../../pages/Images/george3.jpg'
import athlete1 from '../Carousel/athlete1.jpg'
import athlete2 from '../Carousel/athlete2.jpg'
import athlete3 from '../Carousel/ahtlete3.jpg'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBMask, MDBTypography} from
"mdbreact";
import '../Carousel/caro.css'

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="4">
       
      <MDBTypography  className="text-right" tag="h3" variant="display-3">Meet The Atheltes</MDBTypography>
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
                src={athlete1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView waves>
              <img
                className="rounded"
                src={athlete2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView waves>
              <img
                className="rounded"
                src={athlete3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBCol>
      <MDBCol md="4">
        
        

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