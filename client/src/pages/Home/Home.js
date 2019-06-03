import React, { Component } from 'react';
import '../Home/style.css';

class HomePage extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6 form">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-success">Create an Account with GreenSpace</h2>
          <br />
          <form>
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="col-6">
                <input type="text" className="form-control" placeholder="Phone Number" />
              </div>
            </div>
            <br />
            <div className="form-group text-left">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="form-group text-left">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
          <button type="submit" class="btn btn-success float-left">Join!</button>
          </form>
        </div>
      </div>
      </div>
      <div className="col-sm-3"></div>
      </div>
    );
  }
}

export default HomePage;
