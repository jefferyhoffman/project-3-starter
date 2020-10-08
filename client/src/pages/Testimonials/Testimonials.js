import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import css from '../../pages/About/About.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default Testimonials;


function Testimonials() {

      return (
        <>
        <div className="jumbotron text-left">

        <h2>Testimonials:</h2><br></br><br></br>
        <div>
          <Container>
            <p id="about-us" >"EquiPPE has been wonderful to work with and are always responsive, just like this website!" - Jeffrey Hoffman, UNCC Bootcamp Instructor</p>
            <p id="about-us" >"EquiPPE came to my resue when I was all out of toilet paper. Thanks EquiPPE!" - Max Allee, UNCC Bootcamp TA</p>
            <p id="about-us" >"I've always had a good experience working with EquiPPE. They fulfull all my PPE needs!" - Caleb Crum, UNCC Bootcamp TA</p>
        </Container>
        </div>
        </div>
        </>

      );
}