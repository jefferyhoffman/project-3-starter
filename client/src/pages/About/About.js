import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import css from './About.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default About;


function About() {
  const [show, setShow] = useState(false);

      return (

        <>
        <div className="jumbotron text-left"></div>
        <h2>Meet the Team</h2>
        
        <p> 
          <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/adam.jpg')} roundedCircle />
                      <p><a href="https://www.linkedin.com/in/adam-grossman-charlotte/" target="_blank">Adam Grossman, Full Stack Developer</a></p>
                    </Col>
                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/nick.png')} roundedCircle />
                      <p><a href="https://www.linkedin.com/in/nicholas-ryder-8a72021b3/" target="_blank">Nick Ryder, Full Stack Developer</a></p>
                    </Col>
                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/matt.png')} roundedCircle />
                      <p><a href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" target="_blank">Matthew Courtney, Full Stack Developer</a></p>
                    </Col>
                    <Col xs={3} md={3}>
                      <Image width="75%" src={require('../../assets/images/ryan.png')} roundedCircle />
                      <p><a href="https://www.linkedin.com/in/ryanbrooks0101/" target="_blank">Ryan Brooks, Full Stack Developer</a></p>
                    </Col>
                  </Row>
                </Container>
              </p>
        </>

      );
}