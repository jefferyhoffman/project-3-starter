import React from "react"
import "./searchform.css"


function SearchForm  (props) {
    return (
      <form>
        <div className="input-group">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search by City"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="searchbtn">
            Let's Go!
          </button>
        </div>
      </form>
    );
  }
  export default SearchForm