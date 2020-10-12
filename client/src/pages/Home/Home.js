import React, { Component } from 'react';
import '../../components/App/App.css';
import CSS from '../../pages/Home/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class HomePage extends Component {

  render() {
    return (
      <div>

        <div className="jumbotron text-left"></div>

        <Row>
          <Col>
            <h1>Welcome to EquiPPE <i class="fas fa-shield-virus"></i></h1>
            <p className="mission">Here at Equippe we strive to make live saving requipment easy to access. We assure our products are tested to the highest standards and are always available. During this uncertain time you can be certain that EquiPPE is here to ensure your saftey. Please browse our product types below. Please login or create an account to facilitate an order. </p>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="center">

          </Col>


        </Row>
      </div>
    );
  }
}

export default HomePage;