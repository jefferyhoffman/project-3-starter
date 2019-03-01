import React, { Component } from "react";
import ItinForm from "./itinForm";
import Itin from "./itin";

export default class ItinList extends Component {
  state = {
    itins: [],
    itinToShow: "all"
  };

  addItin = itin => {
    this.setState({
      itins: [itin, ...this.state.itins]
    });
  };

  toggleComplete = id => {
    this.setState({
      itins: this.state.itins.map(itin => {
        if (itin.id === id) {
          //suppose to update
          return {
            ...itin,
            complete: !itin.complete
          };
        } else {
          return itin;
        }
      })
    });
  };

  removeItin = id => {
    this.setState({
      itins: this.state.itins.filter(itin => itin.id !== id)
    })
  }

  render() {
    return (
        <div className ="container" style={{boxShadow:"5px 5px 5px 5px #999"}}>
      <br/>
        <h4>Add Your Itinerary</h4>
        <hr />
        <ItinForm onSubmit={this.addItin} />
        {this.state.itins.map(itin => (
          
          <div
            style={{
              background: "white",
              boxShadow: " 0 3px 6px #999, 0 3px 6px #999"
            }}
            id= {itin.id}
            key={itin.id}
            // onRemove={this.removeItin}
          > {itin.text}
          <span className="remove" style={{float:"right"}} >𝘅</span> 
            <hr />
            {/* check this out from old activity  */}
          </div>
        ))}
        <hr />
        <button className="btn btn-primary btn-lg" style={{ float: "right" }}>
          Submit Itinerary
        </button>

         {/* {this.state.itins.map(itin => (
                <Itin
                key={itin.id} 
                toggleComplete={() => this.toggleComplete(itin.id)}
                 itin={itin}
                 />
                ))}
         <div> Todos left: 
                {this.state.itins.filter(
                    itin => !itin.complete.length)}
                    </div>  */}
        {/* <button>All</button>
                    <button>Active</button>
                    <button>Complete</button> */}
      </div>
    );
  }
}
