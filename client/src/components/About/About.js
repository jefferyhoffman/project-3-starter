import React from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import css from '../../components/About/About.css'


function About () {
    return (
        <div id="about">
        <h2>Meet the Team</h2>
        <p id="about">
            We are team of coding bootcamp students who also recognize the importance of safety first! 
        </p>
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <Image width="75%" src={require('../../assets/images/adam.jpg')} roundedCircle />
                        <p>Adam Grossman, Full Stack Developer</p>
                    </Col>
                    <Col xs={3} md={3}>
                        <Image width="75%" src={require('../../assets/images/nick.png')} roundedCircle />
                        <p>Nick Ryder, Full Stack Developer</p>
                    </Col>
                    <Col xs={3} md={3}>
                        <Image width="75%" src={require('../../assets/images/matt.png')} roundedCircle />
                        <p>Matt Courtney, Full Stack Developer</p>
                    </Col>
                    <Col xs={3} md={3}>
                        <Image width="75%" src={require('../../assets/images/ryan.png')} roundedCircle />
                        <p>Ryan Brooks, Full Stack Developer</p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}


export default About;
