import React from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import lulu from '../../components/Cards/lulu.jpeg'
import '../../components/Cards/Cards.css'

function Cards (){
    return(
        <Container>
        <Row>
        <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  <Col>
  <Card className = "card">
    <Card.Img variant="top" src={lulu}  style = {{width: 170, height:200}}/>
      <Card.Text className = "cardtext">
        Flow Y Longline Bra
        <br>
        </br>
        $35
      </Card.Text>
  </Card>
  </Col>
  </Row>
</Container>
    )
}

export default Cards