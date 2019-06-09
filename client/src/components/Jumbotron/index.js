import React from "react";
import './stlye.css';

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 40, textAlign: "center", background: "#a8ff78",background: "-webkit-linear-gradient(to top, #78ffd6, #a8ff78)", background: "linear-gradient(to top, #78ffd6, #a8ff78)",}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}


export default Jumbotron;