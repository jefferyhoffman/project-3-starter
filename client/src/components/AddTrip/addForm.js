import React from "react";
import Form from "./Form";
import ItinList from "./itinList";
import "./style.css";

function AddForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" id="itList">
          <ItinList />
        </div>
        <div className="col-md-6" id="formList">
          <Form />
        </div>
      </div>
      <hr />
      <br />
      <button className="btn btn-danger" id="btnComplete">
        Trip Complete
      </button>
    </div>
  );
}

export default AddForm;
