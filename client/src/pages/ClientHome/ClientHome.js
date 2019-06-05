import React, { Component } from 'react';
import '../ClientHome/style.css';

class ClientHome extends Component {
  state = {}
  render() {
    return (
      <div className="welcome container">
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
         <h1 className="display-4 text-white font-weight-bold">Welcome Back {/*{this.firstName}*/} </h1> 
        </div>
        <div className="col-sm-2"> </div>
        </div>
        <br />
        <div className="row">
        <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ClientHome;