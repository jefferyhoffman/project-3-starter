import React, { Component } from 'react';
import API from '../../lib/API';
// import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

class CustomerForm extends Component {
  state = {
    fullName: '',
    email: '',
    phoneNumber: '',
    tankType: '',
    tankSize: '',
    message: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    //const { fullName, email, phoneNumber, tankType, tankSize, message } = this.state;

    //this.props.onSubmit(fullName, email, phoneNumber, tankType, tankSize, message);
    
    API.Krystal.send(this.state);
  }

  
    
  

  render() {
    const { fullName, email, phoneNumber, tankType, tankSize, message } = this.state;

    return (
      <div className='CustomerForm'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
              

              <div className='form-group mb-3'>
                
                <input
                  className='form-control'
                  id='fullName'
                  type='text'
                  name='fullName'
                  placeholder='First Name and Last Name'
                  value={fullName}
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
                  id='phoneNumber'
                  type='text'
                  name='phoneNumber'
                  placeholder='###-###-####'
                  value={phoneNumber}
                  onChange={this.handleInputChange}
                />
              </div>
              
              <div className='form-group mb-3'>
                <label className='' htmlFor=''>Tank Type</label>
                <select className='form-control' id='tank-type'>
                  <option selected>Choose...</option>
                  <option name='type' value={tankType} onChange={this.handleInputChange}>Tank</option>
                  <option name='type' value={tankType} onChange={this.handleInputChange}>Molded Pond</option>
                  <option name='type' value={tankType} onChange={this.handleInputChange}>Plastic Pond</option>
                  <option name='type' value={tankType} onChange={this.handleInputChange}>Rubber Pond</option>
                  <option name='type' value={tankType} onChange={this.handleInputChange}>Glass Aquarium</option>
                  <option name='type' value={tankType} onChange={this.handleInputChange}>Acrylic Aquarium</option>
                </select>
              </div>

              <div className='form-group mb-3'>
                <input
                  className='form-control'
                  id='tankSize'
                  type='text'
                  name='tankSize'
                  placeholder='gallons'
                  value={tankSize}
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
                  rows='20'>
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
