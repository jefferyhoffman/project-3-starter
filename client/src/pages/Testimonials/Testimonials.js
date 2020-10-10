import React, { useState } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CSS from '../../pages/Testimonials/Testimonials.css'
import Footer from '../../components/Footer/Footer'


export default Testimonials;


function Testimonials() {

      return (
        <>
        <div className="jumbotron text-left">

        <h2>Testimonials <i class="far fa-newspaper"></i></h2>
        <div>
          <Container>
            <p id="test" >"EquiPPE has been wonderful to work with and are always responsive, just like this website!" - Jeff Hoffman, UNCC Coding Bootcamp Instructor<br></br><br></br>
            "EquiPPE came to my rescue when I unexpectedly ran out of toilet paper. Thanks EquiPPE!" - Max Allee, UNCC Coding Bootcamp TA<br></br><br></br>
            "I've always had a remarkable experience working with EquiPPE. They fulfill all my PPE needs!" - Caleb Crum, UNCC Coding Bootcamp TA<br></br><br></br>
            </p>
            
        </Container>
        
        </div>
        </div>
        </>

      );
}