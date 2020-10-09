
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBContainer, MDBJumbotron, MDBAnimation } from 'mdbreact';

const Contact = () => {
  return (
    <>

{/* Jumbo Tron */}
<MDBAnimation type="fadeInRight" delay=".3s">
<MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Meet Our Team</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </MDBAnimation>
    <MDBContainer>
    <MDBRow>
      <MDBCol md='6'>
        <MDBCard wide cascade>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
              alt='Card cap'
            />
          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Kristian Worthy</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>

            <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <a href='!#' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg tw-ic'>
                <MDBIcon fab icon='twitter'></MDBIcon>
              </a>

              <a href='!#' className='px-2 fa-lg fb-ic'>
                <MDBIcon fab icon='facebook-f'></MDBIcon>
              </a>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='6'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
          
            <MDBCardTitle className='card-title'>
              <strong>Leonard Love</strong>
            </MDBCardTitle>
            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>
            <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <hr></hr>
  {/* Bottom */}
<MDBRow>
      <MDBCol md = "6">
      <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
              alt='food'
            />
          </MDBView>

        <MDBCardBody>
            <MDBCardTitle className='card-title'>
              <strong>Leonard Love</strong>
            </MDBCardTitle>
            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>
            <MDBCardText>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>

    <MDBCol md='6'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Aleck Tuluenga</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>

            <MDBCardText>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='dribbble'>
                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
    </MDBContainer >
    </>
  )
}

export default Contact;