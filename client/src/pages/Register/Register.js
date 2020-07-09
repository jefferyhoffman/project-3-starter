import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';


class Register extends Component {
  state = {
    error: ""
  }

  render() {
    return (
      <div className='Register'>
        <Image centered src={require("../../assets/images/megabitesLogo.png")}/>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <RegistrationForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
