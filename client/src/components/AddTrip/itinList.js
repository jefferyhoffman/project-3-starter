import React, { Component } from "react";
import ItinForm from "./itinForm";
import { Link } from "react-router-dom";

export default class ItinList extends Component {
  state = {
    itins: [],
  };

  addItin = itin => {
    this.setState({
      itins: [itin, ...this.state.itins]
    });
    localStorage.setItem("Itinerary", JSON.stringify(this.state.itins))
  };

  render() {
    return (
      <div className="hopefully">
        <div className="container" style={{ boxShadow: "5px 5px 5px 5px #999" }}>
          <br />
          <h4 className="addIT">Add Your Itinerary</h4>
          <hr />
          <ItinForm onSubmit={this.addItin} />
          {this.state.itins.map(itin => (
            <div
              className="addB"
              id={itin.id}
              key={itin.id}
            // onRemove={this.removeItin}
            > {itin.text}
              <hr />
            </div>
          ))}
          <hr />
          <div className="sbmtBtn">
            <Link
              to="/add/review"
              className={window.location.pathname === "/add/review" ? "nav-link active" : "nav-link"}
            >
              <button className="btn btn-primary  btn-lg" style={{ float: "right" }} onClick={this.addItin}>
                Next / Review</button> </Link>
            <br />
            <br />
          </div>
<<<<<<< HEAD
        ))}
        <hr />
       <div className="sbmtBtn">
        <Link
          to="/add/review"
          className={window.location.pathname === "/add/review" ? "nav-link active" : "nav-link"}
        >
        <button className="btn btn-primary  btn-lg" style={{float:"right"}} onClick={this.addItin}>
         Next / Review</button> </Link>
         <br/>
         <br/>
         </div>
         </div>
      </div>
        
=======
        </div>
      </div>        
>>>>>>> 8b4dc32a31d351231e90c456fc96d2e8e0714b62
    );
  }
}
