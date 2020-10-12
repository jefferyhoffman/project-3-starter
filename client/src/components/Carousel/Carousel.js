import React from 'react';
import gk from '../../pages/Images/george3.jpg'
<<<<<<< HEAD
import athlete1 from '../Carousel/athlete1.jpg'
import athlete2 from '../Carousel/athlete2.jpg'
import athlete3 from '../Carousel/ahtlete3.jpg'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBMask, MDBTypography} from
=======
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBTypography} from
>>>>>>> 50fd5f6c9d237cac0604f48d2adb2c0fb5906b34
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

