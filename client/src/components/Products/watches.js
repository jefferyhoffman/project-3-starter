import React, { Component } from "react";
import Watch from "./watch";

class loadingWatches extends Component {
  render() {
    return (
      <div className="Watches loading">
        <Watch />
        <Watch />
        <Watch />
        <Watch />
        <Watch />
        <Watch />
        <Watch />
        <Watch />
      </div>
    );
  }
}

export default loadingWatches;