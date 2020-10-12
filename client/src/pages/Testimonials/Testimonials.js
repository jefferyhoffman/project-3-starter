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


      </div>
      <h2 class="testimonials">Testimonials <i class="far fa-newspaper"></i></h2>
      <p className= "trust" >Dont just take our word for it... <br/> Here are some reviews from our loyal customers</p>
      <Container>
      
        <div className="card card4 mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://ca.slack-edge.com/T016SNZ2NCV-U0171979UBX-384cc41d6a80-512" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Jeff Hoffman, UNCC Coding Bootcamp Instructor</strong></h5>
                <p className="card-text">"EquiPPE has been wonderful to work with and are always responsive, just like this website!" </p>
                <p class="card-text grey"><small className="text-muted"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></small></p>
                <p class="card-text text"><small className="text-muted">October 2020</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card2 mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://ca.slack-edge.com/T016SNZ2NCV-U0171CFKLF7-252ac5934286-512" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Max Allee, UNCC Coding Bootcamp TA</strong></h5>
                <p className="card-text text">"EquiPPE came to my rescue when I unexpectedly ran out of toilet paper. Thanks EquiPPE!" </p>
                <p class="card-text grey"><small className="text-muted"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></small></p>
                <p class="card-text"><small className="text-muted">October 2020</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card4 lastCard mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://ca.slack-edge.com/T016SNZ2NCV-U017G045EV7-714fb709eee9-512" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Caleb Crum, UNCC Coding Bootcamp TA</strong></h5>
                <p className="card-text text">"I've always had a remarkable experience working with EquiPPE. They fulfill all my PPE needs!" </p>
                <p class="card-text grey"><small className="text-muted"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></small></p>
                <p class="card-text"><small className="text-muted">October 2020</small></p>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </>

  );
}