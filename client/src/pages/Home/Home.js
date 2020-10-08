import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard'
import logo from './logo.svg';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const testData = [
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  },
  {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  }
]


function HomePage() {
  

  
    return (
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      
      // <div className="d-flex flex-wrap justify-content-around">
      //   {testData.map(val => {
      //     return <BlogCard author={val.author} city={val.city} state={val.state} text={val.text} img={val.img} ></BlogCard>
      //   })}
      // </div>
    );

}

export default HomePage;
