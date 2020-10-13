
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBContainer, MDBJumbotron, MDBAnimation } from 'mdbreact';
import Kristian from '../Contact/kristian.JPG'
import Leonard from '../Contact/IMG_5572.JPG'
import gk from '../../pages/Images/george3.jpg'
import Aleck from '../Contact/IMG_1238.JPG'

const Contact = () => {
  return (
    <>

      {/* Jumbo Tron */}
      <MDBAnimation type="fadeInRight" delay=".3s">
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <h2 className="h1 display-3">Meet The Team</h2>

                <hr className="my-2" />
                <p>
                  Everyday we come across obstacles and hurdles that aim to knock us off the line we walk.  The line that we've layed for ourselves to achieve our goals and live the life we seek. Here at Saint George, those obstalces and hurdles, we call them dragons and we slay them each and everyday.  Slay your Dragon for you and your people.
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </MDBAnimation>
    <MDBContainer>
    <MDBAnimation type="fadeIn" delay=".7s">
    <MDBRow>
      <MDBCol md = "6">
      <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={Aleck}
              alt='food'
            />
          </MDBView>

        <MDBCardBody>
            <MDBCardTitle className='card-title'>
              <strong>Aleck Tuluenga</strong>
            </MDBCardTitle>
            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>
            <MDBCardText>
            Worked on implementing products and seeding them into the website to where it can successfully speak to the front-end and display. Also helped assist with additional back-end material
            </MDBCardText>

            <a href='https://www.linkedin.com/in/aleck-bryson-tuluenga-86295264/' className='px-2 fa-lg li-ic'>
                <MDBIcon fab icon='linkedin-in'></MDBIcon>
              </a>

              <a href='https://github.com/aleckbryson' className='px-2 fa-lg tw-ic'>
                <MDBIcon fab icon='github'></MDBIcon>
              </a>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>

      <MDBCol md='6'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              cascade
              overlay='white-slight'
              className='img-fluid card-img-top'
              src={Leonard}
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
          
            <MDBCardTitle className='card-title'>
              <strong>Leonard Love</strong>
            </MDBCardTitle>
            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>
            <MDBCardText>
            For this project, I led the development of the backend, modeling the database and customizing the route controllers. I also supported the front-end with hooks, API development, and API implementation.
            </MDBCardText>

                  <MDBCol md='12' className='d-flex justify-content-center'>
                    <a href='https://www.linkedin.com/in/leonard-love-78085b18/' className='px-2 fa-lg li-ic'>
                      <MDBIcon fab icon='linkedin-in'></MDBIcon>
                    </a>

                    <a href='https://github.com/komplexnupe' className='px-2 fa-lg tw-ic'>
                      <MDBIcon fab icon='github'></MDBIcon>
                    </a>

                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
    </MDBRow>
    </MDBAnimation>
    <hr></hr>
  {/* Bottom */}
  <MDBAnimation type="fadeInRight" delay=".7s">


    <MDBRow>
    
    <MDBCol md='6'>
      <MDBCard wide cascade>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay='white-slight'
            className='card-img-top'
            src={Kristian}
            alt='Card cap'
          />
        </MDBView>

        <MDBCardBody cascade className='text-center'>
          <MDBCardTitle className='card-title'>
            <strong>Kristian Worthy</strong>
          </MDBCardTitle>

          <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>

          <MDBCardText>
                Front-Genius
          </MDBCardText>

          <MDBCol md='12' className='d-flex justify-content-center'>
          <a href='https://www.linkedin.com/in/ksworthy/' className='px-2 fa-lg li-ic'>
              <MDBIcon fab icon='linkedin-in'></MDBIcon>
            </a>

            <a href='https://github.com/oksimone' className='px-2 fa-lg tw-ic'>
              <MDBIcon fab icon='github'></MDBIcon>
            </a>
          </MDBCol>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md='6'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={gk}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>George Kourakos</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Full-Stack Web Developer</p>

            <MDBCardText>
            Front-End Genius
            </MDBCardText>
                  <a href='https://github.com/aleckbryson' className='px-2 fa-lg tw-ic'>
                    <MDBIcon fab icon='github'></MDBIcon>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            
          </MDBRow>
        </MDBAnimation>
      </MDBContainer >
    </>
  )
}

export default Contact;