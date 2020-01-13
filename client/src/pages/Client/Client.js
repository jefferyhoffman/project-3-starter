
import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import API from '../../lib/API';
import overlayImage2 from "../../images/Client_BG.jpg";
import Moment from 'react-moment';


const Client = () => {
  const { user } = useContext(AuthContext);

  // ["2020 Main St", "100 Washington Ave", "450 West Blvd", "1330 Green St", "78 Bigsby Rd"]

  const [properties, setProperties] = useState([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState(0);

  useEffect(() => {
    API.Properties.getAll()
      .then(response => response.data)
      .then(properties => setProperties(properties.properties))
      .catch(err => console.log(err));
  }, [])

  const handleChange = event => {
    setSelectedPropertyId(event.target.value);
  }



  // if (!user || user.role !== "nt") {
  //     return <Redirect to = "/" />
  // }
  //   return ( EVERYTHING IN THE RETURN BELOW )

  console.log(properties);
  console.log(selectedPropertyId);

  const selectedPropertyIndex = properties.findIndex(property => property._id === selectedPropertyId);
  console.log(selectedPropertyIndex);



  return (
    <div className="overlayImage2" src={overlayImage2} >
      <div className="clientContainer" style={{ marginTop: "30vh" }}>

        <h1 className="client">Property Details</h1>
        <form>
          <label className="textClient">
            Select your property:
          <select value={selectedPropertyId} onChange={handleChange}>
              {properties.map(property => <option value={property._id}>{property.address}</option>)}
            </select>
          </label>
        </form>
        <br></br>
        <ul className="list" style={{ width: "30vw", margin: "0 auto" }}>
          <li className="clientList"> Address: {selectedPropertyIndex !== -1 && properties[selectedPropertyIndex].address}</li>
          <li className="clientList"> Date: {selectedPropertyIndex !== -1 && <Moment parse="YYYY-MM-DD" format="MMM Do YYYY"> {properties[selectedPropertyIndex].date}</Moment>}</li>
          <li className="clientList"> Task: {selectedPropertyIndex !== -1 && properties[selectedPropertyIndex].task}</li>
        </ul>
        
      </div>
    </div>
  )
};

export default Client
