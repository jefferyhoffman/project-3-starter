import React, { Component } from 'react';
import Modal from 'react-modal';
import '../ClientHome/style.css';
import Completed from './viewAllModal/viewCompletedModal.js';
import Upcomming from './viewAllModal/viewUpcommingModal.js';


class ClientHome extends Raect.Component {

    }


    < div className="welcome container" >
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h1 className="display-4 text-white font-weight-bold">Welcome Back, dude </h1>
        </div>
        <div className="col-sm-2"> </div>
      </div>
      <br />

      <div id="main">

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Completed</h5>
                  <h6 className="card-subtitle mb-2 text-muted">View All of your Completed Services</h6>
                  <button type="button" id="btn" className="btn btn-outline-warning" data-toggle="modal"
                    data-target="#modalPoll-1" style={{ color: "#336600" }}>View Completed Services</button>
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
      </div>
      }
      export default ClientHome;
