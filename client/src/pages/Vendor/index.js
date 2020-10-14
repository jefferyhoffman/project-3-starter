import React, { Component } from "react";
import FOOTER from "../../components/Footer";
import LOGO from "../../components/LOGO";
import Navigation from "../../components/NAVBAR";
import "./style.css";

class Vendor extends Component {
  render() {
    return (
      <div className="Vendor">
        <LOGO></LOGO>
        <Navigation />
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Vendor Registration</p>

          <input
            type="text"
            id="defaultContactFormName"
            className="form-control mb-4"
            placeholder="Name"
          />

          <input
            type="email"
            id="defaultContactFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <label>Subject</label>
          <select className="browser-default custom-select mb-4">
            <option value="" disabled>
              Choose option
            </option>
            <option value="1" selected>
              Market Offering
            </option>
            <option value="2">Feature Offering</option>
            <option value="3">Report a bug</option>
          </select>

          <div className="form-group">
            <label>What's in my Market'</label>
            <textarea
              className="form-control rounded-0"
              id="exampleFormControlTextarea2"
              rows="3"
              placeholder="My Market"
            ></textarea>
          </div>

          <div className="custom-control custom-checkbox mb-4">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultContactFormCopy"
            />
            <label
              className="custom-control-label"
              for="defaultContactFormCopy"
            >
              Send me a copy of this message
            </label>
          </div>

          <button
            className="btn btn-info btn-block #6d4c41 brown darken-1"
            type="submit"
          >
            Send
          </button>
        </form>
        <FOOTER />
      </div>
    );
  }
}

export default Vendor;
