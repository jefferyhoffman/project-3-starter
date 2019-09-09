import React, { Component } from 'react';
import { Table, TableHead, TableBody } from '../../components/Table/Table';
import { Link } from 'react-router-dom';
// import Customer from '../Customer/Customer';
import API from '../../lib/API';
import Modal from 'react-modal';
import { Form, FormItem, FormInput, FormLabel } from '../../components/Form/Form';
import Dropdown from 'react-dropdown';
import { Row, Col } from '../../components/Grid/grid';
// import AuthContext from '../../contexts/AuthContext';
import '../Login/style.css'
import './Admin.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    height: '500px'
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
// database function "makeNew" needs to be called somewhere here
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

  // afterOpenModal = () => {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  makeInactive(id) {
    // e.preventDefault()
    // console.log("We got Clicked ");
  }

  render() {
    //this is where i'll console.log my state/props
    
    const { name, phone, email, address, tank_type, tank_size, contacted, date_contacted, service_notes, fish, products_used } = this.state;
    const options = ['Tank', 'Molded Pond', 'Plastic Pond', 'Rubber Pond', 'Glass Aquarium', 'Acrylic Aquarium'];
    const options2 = ['Yes', 'No'];

    return (

      <div x style={{ position: 'relative', zIndex: 0 }} >
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal">
          <div>
            <h2 >Add a Customer</h2>
            <Row>
              <Col size="md-6">
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                  <FormItem>
                    <FormLabel>Name: <FormInput type="text" id="name" value={name} name="name" placeholder="First and Last name"></FormInput></FormLabel><br />
                    <FormLabel>Phone: <FormInput type="tel" id="phone" value={phone} name="phone" placeholder="Phone Number"></FormInput></FormLabel><br />
                    <FormLabel>Email: <FormInput type="email" id="email" value={email} name="email" placeholder="Example@email.com"></FormInput></FormLabel><br />
                    <FormLabel>Address <FormInput type="text" id="address" value={address} name="address" placeholder="Address"></FormInput></FormLabel><br />
                    <FormLabel>Tank Type: <Dropdown options={options} name="tank_type" value={tank_type} placeholder="Tank Type" onChange={this._onSelect} /></FormLabel><br />
                    <FormLabel>Tank Size: <FormInput type="number" id="tank_size" value={tank_size} name="tank_size" placeholder="Number of Gallons"></FormInput></FormLabel><br />
                    <FormLabel>Contaced: <Dropdown options={options2} name="contacted" value={contacted} placeholder="Contacted" onChange={this._onSelect} /></FormLabel><br />
                    <FormLabel>Date Contacted: <FormInput type="date" id="date_contacted" value={date_contacted} name="date_contacted" placeholder="Date Contacted"></FormInput></FormLabel><br />
                    <FormLabel>Service Notes: <FormInput type="text" id="service_notes" value={service_notes} name="service_notes" placeholder="Enter Notes Here"></FormInput></FormLabel><br />
                    <FormLabel>Fish: <FormInput type="text" id="fish" value={fish} name="fish" placeholder="Fish Owned"></FormInput></FormLabel><br />
                    <FormLabel>Products Used: <FormInput type="text" id="products_used" value={products_used} name="products_used" placeholder="Products Used"></FormInput></FormLabel>
                  </FormItem>
                  <button type="submit" className="btn btn-primary" onSubmit={(event) => this.handleInputChange(event)}>Save</button>
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
            <button className="btn btn-primary spacer" onClick={() => this.openModal}>Add Customer</button>
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
