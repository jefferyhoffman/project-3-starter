import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CSS from '../../pages/Contact/Contact.css'
import Swal from 'sweetalert2'

export default Contact;


function Contact() {

  const handleContact = (event) => {
    // event.preventDefault();
    console.log("submited")
     
    Swal.fire({
      title: "We're on it!",
      text: 'Our customer service team will reach back out to you shortly',
      icon: 'success',
      confirmButtonText: 'Okay'
    })
  };

  return (


    <>
      <div className="jumbotron text-left">


      </div>
      <h2 class="testimonials">Contact <i class="far fa-envelope"></i></h2>

      <Container>
        <div className="blue">
          <Form className="trust">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Subject:</Form.Label>
              <Form.Control type="email" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment:</Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
            <Button className="sbmt" onClick={handleContact}>Submit</Button>
            <p className="trusty" >Equippe, LLC<br />PO Box 12345<br />Charlotte, NC 28207<br />(704) 555-5555 </p>
          </Form>
        </div>
      </Container>

    </>

  );
}