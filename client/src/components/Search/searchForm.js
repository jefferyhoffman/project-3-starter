import React from "react"


function SearchForm  (props) {
    return (
      <form>
        <div className="form-group">
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3" style={{float:"rightyar"}}>
            Search
          </button>
        </div>
      </form>
    );
  }
  export default SearchForm