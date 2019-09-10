import React, { Component } from 'react';
import { List } from '../../components/List/List';
import ListItem from '../../components/List/ListItem'
import { Container, Row, Col } from '../../components/Grid/grid';
import './Customer.css';
import API from '../../lib/API';
import Moment from 'react-moment';
// import API from '../../../../server/'


class Customer extends Component {
  state = {
    customer: {},
    name: "",
    editingName: false,
    phone: "",
    editingPhone: false,
    email: "",
    editingEmail: false,
    address: "",
    editingAddress: false,
    date_contacted: "",
    editingDate_Contacted: false,
    service_notes: "",
    editingService_notes: false,
    fish: "",
    editingFish: false,
    products_used: "",
    editingProducts_Used: false,
  }

  componentDidMount() {
    API.Krystal.grabOne(this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({ customer: res.data })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    console.log('firing')
    const { name, value } = event.target;
    // let value = event.target.value;
    // const name = event.target.name;
    console.log(name, value)
    this.setState({
      name: value
    });

    // this.setState({ name: event.target.value })
    console.log(this.state)

  }

  //Blurs

  handleBlurName = (id) => {
    console.log(id, this.state.name)
    const newCustomer = this.state.customer
    newCustomer.name = this.state.name
    this.setState({ editingName: false, customer: newCustomer});
    API.Customer.update(id, this.state.name)
  }


  //Field edits
  handleNameEdit = (e) => {
    this.setState({ editingName: true });
  }


  renderName() {
    return
  }

  render() {
    const customer = this.state.customer

    return (

      <Container className="text-left">
        <Row>
          <h2 className="header">Cumstomer Information</h2>
        </Row>

        <Row>
          <Col size="md-6">
            <List>
              <ListItem editing={this.state.editingName} className="list-group-item" onClick={(e) => this.handleNameEdit(e)} onBlur={() => this.handleBlurName(this.props.match.params.id)} onChange={this.handleInputChange}>Name: {customer.name}</ListItem>
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
              <ListItem>Date Contacted: <Moment format="DD-MM-YYYY">{customer.date_contacted}</Moment></ListItem>
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
