import React, { Component } from 'react';
import {List, ListItem} from '../../components/List/List';
import {Container, Row, Col} from '../../components/Grid/grid';
import './Customer.css';
// import API from '../../../../server/'

 class Customer extends Component {
   state = {
     customer: {}
   }

  //  componentDidMount() {
  //    API.getcustomer(this.props.match.params.id)
  //      .then(res => this.setState({ customer: res.data}))
  //      .catch(err => console.log(err));
  //  }

   render() {
     return (
      <Container className="text-left">
        <Row>
          <Col size="md-6">
            <List>
                <ListItem>Name: </ListItem>
                <ListItem>Phone:</ListItem>
                <ListItem>Email: </ListItem>
                <ListItem>Address: </ListItem>
                <ListItem>Tank Type: </ListItem>
            </List>
          </Col>
          <Col size="md-6">
            <List>
               <ListItem>Tank Size: </ListItem>
               <ListItem>Contacted: </ListItem>
               <ListItem>Date Contacted: </ListItem>
               <ListItem>Date They Reached Out: </ListItem>
               <ListItem>Active: </ListItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <List className="noteList">
              <ListItem>Service Notes: </ListItem>
              <ListItem>Fish: </ListItem>
              <ListItem>Products Used: </ListItem> 
            </List>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
     )
   }

 }

 export default Customer;
