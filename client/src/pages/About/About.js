import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import css from '../../pages/About/About.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default About;


function About() {
  const [show, setShow] = useState(false);

      return (

        <>
        
        <div className="jumbotron text-left">

        <h2>Meet the Team:</h2><br></br><br></br>
        <div>
        <Container>
        <p id="about-us" >We are a team of UNC-Charlotte full stack developer students with a passion for cleanliness and safety (next to coding). We have collaborated to create a fully functional eCommerce site with a working shopping cart that will fulfill all your PPE needs. Please let us know you stopped by and feel free to connect with us via our individual profiles below.</p>
        </Container>
        </div>
        </div>
      
        <p> 
          <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image id="hover" width="75%" src={require('../../assets/images/adam.jpg')} roundedCircle />
                      <p><strong>Adam Grossman</strong> <br></br> Full Stack Developer</p>
                      <p><a href="https://www.linkedin.com/in/adam-grossman-charlotte/" target="_blank"><i class="fab fa-linkedin"></i> </a>|
                      <a href="https://adgrossm.github.io/Portfolio/portfolio.html" target="_blank"> <i class="fas fa-briefcase"></i></a> |
                      <a href="https://github.com/adgrossm" target="_blank"> <i class="fab fa-github-square"></i></a>
                      </p>

                    </Col>
                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/nick.png')} roundedCircle />
                      <p><strong>Nick Ryder</strong> <br></br> Full Stack Developer</p>
                      <p><a href="https://www.linkedin.com/in/nicholas-ryder-8a72021b3/" target="_blank"><i class="fab fa-linkedin"></i> </a>|
                      <a href="https://nryder7.github.io/ResponsivePortfolio/portfolio.html" target="_blank"> <i class="fas fa-briefcase"></i></a> |
                      <a href="https://github.com/nryder7" target="_blank"> <i class="fab fa-github-square"></i></a>
                      </p>
                    </Col>

                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/matt.png')} roundedCircle />
                      <p><strong>Matthew Courtney</strong> <br></br> Full Stack Developer</p>
                      <p><a href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" target="_blank"><i class="fab fa-linkedin"></i> </a>|
                      <a href="https://sharkattack182.github.io/portfolio-experiment/index.html" target="_blank"> <i class="fas fa-briefcase"></i></a> |
                      <a href="https://github.com/sharkattack182" target="_blank"> <i class="fab fa-github-square"></i></a>
                      </p>
                    </Col>
                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/ryan.png')} roundedCircle />
                      <p><strong>Ryan Brooks</strong> <br></br> Full Stack Developer</p>
                      <p><a href="https://www.linkedin.com/in/ryanbrooks0101/" target="_blank"><i class="fab fa-linkedin"></i> </a>|
                      <a href="https://ryanbrooks99.github.io/reactportfolio/" target="_blank"> <i class="fas fa-briefcase"></i></a> |
                      <a href="https://github.com/ryanbrooks99" target="_blank"> <i class="fab fa-github-square"></i></a>
                      </p>
                    </Col>
                  </Row>
                </Container>
                
              </p>
        </>

      );
}