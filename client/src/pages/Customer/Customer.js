import React, { Component } from 'react';
import { List } from '../../components/List/List';
import ListItem from '../../components/List/ListItem'
import { Container, Row, Col } from '../../components/Grid/grid';
import './Customer.css';
import API from '../../lib/API';
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

  handleBlurPhone = () => {
    this.setState({ editingPhone: false });
  }

  handleBlurEmail = () => {
    this.setState({ editingPhone: false });
  }

  handleBlurAddress = () => {
    this.setState({ editingPhone: false });
  }

  handleBlurProductsUsed = () => {
    this.setState({ editingPhone: false });
  }

  handleBlurFish = () => {
    this.setState({ editingPhone: false });
  }

  handleBlurServiceNotes = () => {
    this.setState({ editingPhone: false });
  }

  //Field edits
  handleNameEdit = (e) => {
    this.setState({ editingName: true });
  }

  handlePhoneEdit = () => {
    this.setState({ editingPhone: true });
  }

  handleEmailEdit = () => {
    this.setState({ editingEmail: true });
  }

  handleAddressEdit = () => {
    this.setState({ editingAddress: true });
  }

  handleProductsUsedEdit = () => {
    this.setState({ editingProducts_Used: true });
  }

  handleFishEdit = () => {
    this.setState({ editingFish: true });
  }

  handleServiceNotesEdit = () => {
    this.setState({ editingService_notes: true });
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
              <ListItem editing={this.state.editingPhone} className="list-group-item" onClick={this.handlePhoneEdit} onBlur={this.handleBlurPhone}>Phone: {customer.phone}</ListItem>
              <ListItem editing={this.state.editingEmail} className="list-group-item" onClick={this.handleEmailEdit} onBlur={this.handleBlurEmail}>Email: {customer.email}</ListItem>
              <ListItem editing={this.state.editingAddress} className="list-group-item" onClick={this.handleAddressEdit} onBlur={this.handleBlurAddress}>Address: {customer.address}</ListItem>
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
              <ListItem editing={this.state.editingService_notes} className="list-group-item" onClick={this.handleServiceNoteEdit} onBlur={this.handleBlurServiceNotes}>Service Notes: {customer.service_notes}</ListItem>
              <ListItem editing={this.state.editingFish} className="list-group-item" onClick={this.handleFishEdit} onBlur={this.handleBlurFish}>Fish: {customer.fish}</ListItem>
              <ListItem editing={this.state.editingProducts_Used} className="list-group-item" onClick={this.handleProductsUsedEdit} onBlur={this.handleBlurProductsUsed}>Products Used: {customer.products_used}</ListItem>
              <ListItem>Message: {customer.message}</ListItem>
            </List>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <Row>
          <button type="submit" className="btn btn-primary"></button>
        </Row>
      </Container>
    )
  }

}

export default Customer;
