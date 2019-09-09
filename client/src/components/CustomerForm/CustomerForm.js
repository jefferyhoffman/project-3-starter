import React, { Component } from 'react';
import API from '../../lib/API';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class CustomerForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    tank_type: '',
    tank_size: '',
    message: '',
    modalIsOpen: false,
    redirect:false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
  
  _onSelect = option =>{
    this.setState({tank_type:option.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    
    API.Krystal.send(this.state).then((results)=>{
      results.status=== 200 && this.openModal()
    })
  }

  openModal=()=>{
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal=()=> {
    this.subtitle.style.color = '#f00';
  }
 
  closeModal=()=> {
    this.setState({modalIsOpen: false, redirect:true});
  }
    
  

  render() {
    const { name, email, phone, tank_type, tank_size, message,redirect } = this.state;

    const options = ['Tank', 'Molded Pond', 'Plastic Pond', 'Rubber Pond', 'Glass Aquarium', 'Acrylic Aquarium']
    
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className='CustomerForm'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Thank You</h2>
          <div><h2>Information Sent Successfully!</h2></div>
          <button onClick={this.closeModal}>close</button>
          

        </Modal>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
            
              <div className='form-group mb-3'>
                <input
                  className='form-control'
                  id='name'
                  type='text'
                  name='name'
                  placeholder='First Name and Last Name'
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='form-group mb-3'>
                <input
                  className='form-control'
                  id='phone'
                  type='text'
                  name='phone'
                  placeholder='704-555-5555'
                  value={phone}
                  onChange={this.handleInputChange}
                />
              </div>
              
              <Dropdown 
                options={options} 
                name="tank_type"
                placeholder="Select A Tank Type"
                value={tank_type} 
                onChange={this._onSelect} />

              <div className='form-group mb-3'>
                <input
                  className='form-control'
                  id='tank_size'
                  type='text'
                  name='tank_size'
                  placeholder='gallons'
                  value={tank_size}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor=''>Message</label>
                <textarea 
                  className='form-control' 
                  id='message'
                  name='message' 
                  value={message}
                  onChange={this.handleInputChange}
                  rows='10'>
                </textarea>
              </div>

              <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerForm;
