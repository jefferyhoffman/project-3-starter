import React, { Component } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard'
// import logo from './logo.svg';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"
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
  }, {
    author: "Caleb",
    city: "Huntersville",
    state: "North Carolina",
    text: "I like Huntersville",
    img: "https://www.lakenormanmike.com/wp-content/uploads/2019/12/Huntersville-NC-birkdale-village-lake-norman-real-estate-agent.jpg"
  }, {
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
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Label>Search By City</Form.Label>

            <Form.Control type="text" placeholder="Enter City"></Form.Control>

            {/* <input

          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-around">
            {testData.map(val => {
              return <BlogCard author={val.author} city={val.city} state={val.state} text={val.text} img={val.img} ></BlogCard>
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );

}

export default HomePage;
