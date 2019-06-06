import React, { Component } from 'react';
import "./UpdateProfile.css";


class userProfile extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { name, email, password, confirmPassword } = this.state;

    this.props.onSubmit(name, email, password, confirmPassword);
    event.preventDefault();
  }

  render() {
    const { name, email, password, confirmPassword } = this.state;


    return (
      <div className="container">
        <div className='UpdateProfileT'>
          <div className='card'>
            <div className='card-body'>
              <h1>Update Profile</h1>
              <form className='updateProfile' onSubmit={this.handleSubmit}>

                <div className='input-group mb-3'></div>
                  <div className="input-group-prepend"></div>
                  <input
                    className='form-control'
                    id='name'
                    type='name'
                    name='name'
                    placeholder='name'
                    value={name}
                    onChange={this.handleInputChange}
                  />
        

                  <div className='input-group mb-3'></div>
                    <div className="input-group-prepend"></div>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      name='email'
                      placeholder='email@koscowix.com'
                      value={email}
                      onChange={this.handleInputChange}
                    />


                    <div className='input-group mb-3'></div>
                      <div className="input-group-prepend"></div>
                      <input
                        className='form-control'
                        id='password'
                        type='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={this.handleInputChange}
                      />

                       <div className='input-group mb-3'></div>
                      <div className="input-group-prepend"></div>
                      <input
                        className='form-control'
                        id='confirmPassword'
                        type='Password'
                        name='confirmPassword'
                        placeholder='confirm password'
                        value={confirmPassword}
                        onChange={this.handleInputChange}
                      />
<br/>
                    <button className='btn btn-secondary sub-button' type='submit'>Update Profile</button>
                    </form>
                </div>
           </div>
          </div>
        </div>
      

    )
  }
}

export default userProfile;