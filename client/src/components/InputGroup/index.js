import React, { Component } from "react";

function InputGroup(props) {
    return (
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input className="form-control" type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
      </div>
    );
}

export default InputGroup;
