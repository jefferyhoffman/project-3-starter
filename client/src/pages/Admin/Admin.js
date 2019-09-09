import React, { Component } from 'react';
import { Table, TableHead, TableBody } from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import Customer from '../Customer/Customer';
import API from '../../lib/API';
import Modal from 'react-modal';
import { Form, FormItem, FormInput, FormLabel } from '../../components/Form/Form';
import Dropdown from 'react-dropdown';
import { Row, Col } from '../../components/Grid/grid';
import AuthContext from '../../contexts/AuthContext';
import '../Login/style.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Admin extends Component {
  state = {
    customers: [],
    modalIsOpen: false,
    name: "",
    phone: "",
    email: "",
    address: "",
    tank_type: "",
    tank_size: "",
    contacted: "",
    date_contacted: "",
    service_notes: "",
    fish: "",
    products_used: "",
    active: ""
  }

  componentDidMount(response) {
    API.Krystal.grab()
      // console.log(response)
      .then(response => {
        console.log(response)
        return this.setState({ customers: response.data })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  _onSelect = option => {
    this.setState({ tank_type: option.value })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, redirect: true });
  }

  makeInactive(id) {
    // e.preventDefault()
    // console.log("We got Clicked ");
  }

  render() {
    //this is where i'll console.log my state/props
    let { user } = this.context
    const { name, phone, email, address, tank_type, tank_size, contacted, date_contacted, service_notes, fish, products_used } = this.state;
    const options = ['Tank', 'Molded Pond', 'Plastic Pond', 'Rubber Pond', 'Glass Aquarium', 'Acrylic Aquarium'];
    const options2 = [true, false];

    return (

      <div style={{ position: 'relative', zIndex: 0 }} >

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal">
          <div>
            <h2>Add a Customer</h2>
            <Row>
              <Col size="md-6">
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                  <FormItem>
                    <FormInput type="text" id="name" value={name} name="name" placeholder="First and Last name"></FormInput>
                    <FormInput type="tel" id="phone" value={phone} name="phone" placeholder="Phone Number"></FormInput>
                    <FormInput type="email" id="email" value={email} name="email" placeholder="Example@email.com"></FormInput>
                    <FormInput type="text" id="address" value={address} name="address" placeholder="Address"></FormInput>
                    <Dropdown options={options} name="tank_type" value={tank_type} placeholder="Select a Tank Type" onChange={this._onSelect} />
                    <FormInput type="number" id="tank_size" value={tank_size} name="tank_size" placeholder="Number of Gallons"></FormInput>
                    <Dropdown options={options2} name="contacted" value={contacted} placeholder="Have they been Contacted?" onChange={this._onSelect} />
                    <FormInput type="date" id="date_contacted" value={date_contacted} name="date_contacted" placeholder="Date Contacted"></FormInput>
                    <FormInput type="text" id="service_notes" value={service_notes} name="service_notes" placeholder="Enter Notes Here"></FormInput>
                    <FormInput type="text" id="fish" value={fish} name="fish" placeholder="Fish Owned"></FormInput>
                    <FormInput type="text" id="products_used" value={products_used} name="products_used" placeholder="Products Used"></FormInput>
                  </FormItem>
                  <button type="submit" onSubmit={(event) => this.handleInputChange(event)}></button>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal>


        <Row>
          <Col size="md-6">
            <h2>Customer Information</h2>
          </Col>
          <Col size="md-6">
            <button className="btn btn-primary" onClick={() => this.openModal}>Add Customer</button>
          </Col>
        </Row>
        <Table>
          <TableHead>
          </TableHead>
          <TableBody>
            {console.log(this.state)}
            {this.state.customers.map(customer => {
              // console.log(customer._id);
              return (
                <tr key={customer._id}>
                  <th scope="row"><Link to={"/customer/" + customer._id}>{customer.name}</ Link></th>
                  {customer.contacted ? (<td>Yes</td>) : (<td>No</td>)}
                  <td>{customer.date_contacted}</td>
                  <td><button onClick={() => this.makeInactive()} className="btn btn-danger btn-sm">X</button></td>
                </tr>
              )
            })
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default Admin;
