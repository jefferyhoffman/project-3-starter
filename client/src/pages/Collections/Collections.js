import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import "./Collections.css";
// import WatchCard from '../../components/Products/watch';
import watchVid from "../Home/vidBg.mp4";

// import "./collections.css";
// import "./style.css";
// import WatchCard from '../../components/Products/watch';

import API from "../../utils/API";


class Collections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
    .then(res => this.setState({ items: res.data}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="row1-c">
          <video autoPlay muted loop id="videoBg" src={watchVid} type="video/mp4"></video>
          <div class="text-overlay">KOSCOWIX</div>
          <p className="p-title">Collections</p>
        </div>
        <div className="row" id="row2">
          <div className="col-4" id="row2sec1">
            TEST
          </div>
          <div className="col-4" id="row2sec2">

          </div>
          <div className="col-4" id="row2sec3">
            LETS SEE
          </div>
        </div>
        <div className="row" id="row3">
          <div className="col-4" id="row3sec1">

          </div>
          <div className="col-4" id="row3sec2">

          </div>
          <div className="col-4" id="row3sec3">

          </div>
        </div>
        <div className="row" id="row4">
            <div className="col-4" id="row4sec1">

            </div>
            <div className="col-4" id="row4sec2">

            </div>
            <div className="col-4" id="row4sec3">
        </div>
        
       

        </div>
      </div>

 
   
      


    );
  }
}

export default Collections;
