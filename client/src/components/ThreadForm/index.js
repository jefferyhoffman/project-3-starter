import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ 
      float: "center", 
      backgroundColor: "#2aa5c6", 
      borderColor: "#000000",
      color: "#000000",
      fontSize: "1.2em",
      padding: "16px",
      borderRadius: "6px"
      }}className="custom-button">
      {props.children}
    </button>
  );
}
