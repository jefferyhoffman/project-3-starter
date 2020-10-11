import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard'
import logo from './logo.svg';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../lib/API";


function HomePage() {

  const [citySearch, setCitySearch] = useState("")
  const [randomBlogs, setRandomBlogs] = useState()
  const [searchByCityResults, setSearchByCityResults] = useState();

  useEffect(() => {
    API.Blog.getAllBlogs().then(data => {
      console.log(data.data)
      setRandomBlogs(() => data.data)
    })

  }, [])


  const handleCitySearchChange = (event) => {
    setCitySearch(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    API.Blog.getAllByCity(citySearch).then(data => {
      console.log("hit", data.data)
      setSearchByCityResults(() => data.data)
    })

  }

  return (
    <Container >
      <Row style={{ marginTop: "100px" }}>
        <Col>
          <Form onSubmit={e => handleOnSubmit(e)}>
            <Form.Label>Search By City</Form.Label>

            <Form.Control type="text" placeholder="Enter City"></Form.Control>

    
            <Button className="m-2"  variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-around">
            {searchByCityResults ? searchByCityResults.map(val => {
              return <BlogCard author={val.email} city={val.city} state={val.state} text={val.blog} img={val.image} ></BlogCard>
            }) : null}
          </div>

        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-around">
            {searchByCityResults ? searchByCityResults.map(val => {
              return <BlogCard author={val.email} city={val.city} state={val.state} text={val.blog} img={val.image} ></BlogCard>
            }) : randomBlogs ? randomBlogs.map(val => {
              return <BlogCard author={val.email} city={val.city} state={val.state} text={val.blog} img={val.image} ></BlogCard>
            }) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );

}

export default HomePage;


