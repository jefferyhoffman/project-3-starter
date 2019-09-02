import React, { Component } from "react";

function Button(props) {
  return <button className="btn btn-primary btn-block" onClick={props.onClick}>{props.value}</button>;
}

export default Button;
