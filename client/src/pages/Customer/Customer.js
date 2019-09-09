import React, { Component } from 'react';
import {List, ListItem} from '../../components/List/List';
import {Container, Row, Col} from '../../components/Grid/grid';
import './Customer.css';
import API from '../../lib/API';
// import API from '../../../../server/'

 class Customer extends Component {
   state = {
     customer: {}
   }

   componentDidMount() {
     API.Krystal.grabOne(this.props.match.params.id)
       .then(res => {
        console.log(res.data) 
        this.setState({ customer: res.data})})
       .catch(err => console.log(err));
   }

   render() {
     const customer = this.state.customer
     return (
      <Container className="text-left">
        <Row>
          <Col size="md-6">
            <List>
                <ListItem>Name: {customer.name}</ListItem>
                <ListItem>Phone: {customer.phone}</ListItem>
                <ListItem>Email: {customer.email}</ListItem>
                <ListItem>Address: {customer.address}</ListItem>
                <ListItem>Tank Type: {customer.tank_type}</ListItem>
            </List>
          </Col>
          <Col size="md-6">
            <List>
               <ListItem>Tank Size: {customer.tank_size}</ListItem>
               {customer.contacted ? <ListItem>Contacted: Yes</ListItem> : <ListItem>Contacted: No</ListItem>}
               <ListItem>Date Contacted: {customer.date_contacted}</ListItem>
               {customer.active ? <ListItem>Active: Yes</ListItem> : <ListItem>Active: No</ListItem>}
            </List>
          </Col>
        </Row>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <List className="noteList">
              <ListItem>Service Notes: {customer.service_notes}</ListItem>
              <ListItem>Fish: {customer.fish}</ListItem>
              <ListItem>Products Used: {customer.products_used}</ListItem>
              <ListItem>Message: {customer.message}</ListItem>  
            </List>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
     )
   }

 }

 export default Customer;
