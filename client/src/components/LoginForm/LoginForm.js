import React, { Component } from 'react';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';

const styles = {
  
  form: {
    textAlign: "center",
    marginRight: "100px"
  },
  button: {
    marginLeft: "115px"
  }
}

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <div style={styles.form}>
        <form className='LoginForm' onSubmit={this.handleSubmit}>
          <div className="field" >
            <p className="control has-icons-left has-icons-right">
              <Octicon icon={Mail} />
              <input className="input"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleInputChange} />
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <Octicon icon={Key} />
              <input 
                className="input"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleInputChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <button className='button is-primary' type='submit' style={styles.button}>Login</button>
        </form>
      </div >
    )
  }
}

export default LoginForm;

// <div classNameName='LoginForm'>
//   <div classNameName='card'>
//     <div classNameName='card-body'>
//       <form classNameName='LoginForm' >
//         <div classNameName='input-group mb-3'>
//           <div classNameName="input-group-prepend">
//             <span classNameName="input-group-text"><Octicon icon={Mail} /></span>
//           </div>
//           <input
//             classNameName='field'
//             id='email'
//             type='email'
//             label='email'
//             placeholder='email@provider.com'
//             value={email}
//             onChange={this.handleInputChange}
//           />
//         </div>

{/* <div classNameName='input-group mb-3'>
                <div classNameName="input-group-prepend">
                  <span classNameName="input-group-text"><Octicon icon={Key} /></span>
                </div>
                <input
                  classNameName='field'
                  id='password'
                  type='password'
                  label='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div> */}