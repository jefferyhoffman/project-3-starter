import React, { Component } from 'react';
import { Table, TableHead, TableBody } from '../../components/Table/Table';
import { Link } from 'react-router-dom';
// import Customer from '../Customer/Customer';
import API from '../../lib/API';
import Modal from 'react-modal';
import { Form, FormItem, FormInput, FormLabel } from '../../components/Form/Form';
import Dropdown from 'react-dropdown';
import { Row, Col } from '../../components/Grid/grid';
import AuthContext from '../../contexts/AuthContext';
import '../Login/style.css';
import './Admin.css';
import Moment from 'react-moment';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';

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
    name: "",
    phone: "",
    email: "",
    address: "",
    tank_type: "",
    tank_size: "",
    date_contacted: "",
    service_notes: "",
    fish: "",
    products_used: "",
    active: "",
    contacted: false
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
    // let value = event.target.value;
    // const name = event.target.name;

    this.setState({
      [name]: value
    });

    // this.setState({ name: event.target.value })
    console.log(this.state)

  }

  handleSub = (e) => {
    e.preventDefault()
    // console.log(this.state)
    // console.log('sub<=====================================================')
    if (this.state.truthy == "yes"){
      this.setState({contacted: true})
    }
    let objToSend = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      tank_type: this.state.tank_type,
      tank_size: this.state.tank_size,
      contacted: this.state.contacted,
      date_contacted: this.state.date_contacted,
      service_notes: this.state.service_notes,
      fish: this.state.fish,
      products_used: this.state.products_used
    }
    
    API.Krystal.send(objToSend).then((results) => {
       results.status === 200 && this.closeModal()

    }).then(
      API.Krystal.grab()
      // console.log(response)
      .then(response => {
        // console.log(response)
        return this.setState({ customers: response.data })
      })
      .catch(err => console.log(err))
    )
    
  }

  _onSelect = option => {
    this.setState({ tank_type: option.value })
  }

  _onSelect2 = option => {
    this.setState({ truthy: option.value })
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
    let { user } = this.context
    const { name, phone, email, address, tank_type, tank_size, truthy, date_contacted, service_notes, fish, products_used } = this.state;
    const options = ['Tank', 'Molded Pond', 'Plastic Pond', 'Rubber Pond', 'Glass Aquarium', 'Acrylic Aquarium'];
    const options2 = ["Yes", "No"];

    return (

      <div className="page"style={{ position: 'relative', zIndex: 0 }} >

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal">
          <div>
            <h2>Add a Customer</h2>
            <Row>
              <Col size="md-8">
                <Form >
                  {/* <Form onSubmit={(event)=>{this.handleSub(event)}}> */}

                  <FormItem>
                    <FormLabel>Name: <input type="text" onChange={this.handleInputChange} id="name" value={name} name="name" placeholder="First and Last name"></input></FormLabel><br />
                    <FormLabel>Phone: <input type="tel" onChange={this.handleInputChange} id="phone" value={phone} name="phone" placeholder="Phone Number"></input></FormLabel><br />
                    <FormLabel>Email: <input type="email" onChange={this.handleInputChange} id="email" value={email} name="email" placeholder="Example@email.com"></input></FormLabel><br />
                    <FormLabel>Address <input type="text" onChange={this.handleInputChange} id="address" value={address} name="address" placeholder="Address"></input></FormLabel><br />
                    <FormLabel>Tank Type: <Dropdown options={options} onChange={this._onSelect} name="tank_type" value={tank_type} placeholder="Tank Type" /></FormLabel><br />
                    <FormLabel>Tank Size: <input type="text" onChange={this.handleInputChange} id="tank_size" value={tank_size} name="tank_size" placeholder="Number of Gallons"></input></FormLabel><br />
                    {/* lets add he ternery here for the yes/no to equal true/false */}
                    <FormLabel>Contaced: <Dropdown options={options2} onChange={this._onSelect2} name="truthy" value={truthy} placeholder="Contacted" /></FormLabel><br />
                    <FormLabel>Date Contacted: <input type="text" onChange={this.handleInputChange} id="date_contacted" value={date_contacted} name="date_contacted" placeholder="Date Contacted"></input></FormLabel><br />
                    <FormLabel>Service Notes: <input type="text" onChange={this.handleInputChange} id="service_notes" value={service_notes} name="service_notes" placeholder="Enter Notes Here"></input></FormLabel><br />
                    <FormLabel>Fish: <input type="text" id="fish" onChange={this.handleInputChange} value={fish} name="fish" placeholder="Fish Owned"></input></FormLabel><br />
                    <FormLabel>Products Used: <input type="text" onChange={this.handleInputChange} id="products_used" value={products_used} name="products_used" placeholder="Products Used"></input></FormLabel>
                  </FormItem>
                  <button type="submit" className="btn btn-primary" onClick={this.handleSub}>Save</button>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal>


        <Row>
          <Col className="top" size="md-6">
            <h2>Active Customers</h2>
          </Col>
          <Col className="top" size="md-6">
            <button className="btn btn-primary" onClick={() => this.openModal()}>Add Customer</button>
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
                  {customer.contacted ? (<td><Moment format="DD-MM-YYYY">{customer.date_contacted}</Moment></td>) : (<td>Need to Contact</td>)}
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
