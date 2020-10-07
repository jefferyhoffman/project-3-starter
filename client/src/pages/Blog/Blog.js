import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";



export default function Blog() {
  return (
    <>
      <Navbar className="bg-transparent justify-content-between">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Image
              src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/Apple-maps-app.png"
              fluid
            />
          </Col>
        </Row>
        {/* <Row>
          <Col></Col>
          {/* <Col>2 of 3</Col> */}
          {/* <Col>
            <Image
              src="https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg"
              fluid
            />
          </Col>
        </Row> */} 
        <Card>
          <Card.Header>(Footer)</Card.Header>
        </Card>
      </Container>
    </>
  );
}
