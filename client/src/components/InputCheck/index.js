import React, { Component } from "react";

function InputCheck(props) {
  return (
    <div className={`form-check ${props.extraClass || ""}`}>
      <input
        className="form-check-input"
        type="checkbox"
        value={props.value}
        id={props.id}
        key={props.id}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.genre}
      </label>
    </div>
  );
}

export default InputCheck;
