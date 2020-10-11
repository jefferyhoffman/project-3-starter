import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default Contact;

 
function Contact() {
     

  return (

    
    <>
      <div className="jumbotron text-left">
        

      </div>
      <h2 class="testimonials">Contact <i class="far fa-envelope"></i></h2>
      <p className= "trust" >Please let us know how to make your experience better!</p>
      <p className= "trust" >Equippe, LLC<br/>PO Box 12345<br/>Charlotte, NC 28207<br/>(704) 555-5555 </p>
      <Container>
      <Form className= "trust">
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
  <Button>Submit</Button>
  
</Form>  
        
      </Container>

    </>

  );
}