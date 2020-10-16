import React, { useState } from "react";
import FOOTER from "../../components/Footer";
import LOGO from "../../components/LOGO";
import Navigation from "../../components/NAVBAR";
import API from '../../lib/API';
// import "../../components/App/utils/button"
function HomePage () {
  
  const [zipCodeSearch, setZipCodeSearch] = useState("")
  const [zipCodeSearchData, setZipCodeSearchData] = useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    API.Maps.getMaps(zipCodeSearch)
      .then(data => {
        setZipCodeSearchData(() => data.data);
      })

  }

    return (
      <div className="Home">
        <LOGO></LOGO>
        <Navigation />
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <label for="zip-code">Zip Code</label>
            <input onChange={e => setZipCodeSearch(e.target.value)} className="form-control" id="zip-code" type="input"></input>
            <small className="form-text text-muted">Please type Your Zip Code Above.</small>
          </div>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
          {zipCodeSearchData ? 
          <ul>
            {zipCodeSearchData.map(val => {
              return(
                <li>{val.marketname}</li>
              )
            })}
          </ul> : null}
        <FOOTER />
      </div>
    );
}

export default HomePage;
