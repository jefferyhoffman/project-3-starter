
import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import API from '../../lib/API';


const Client = () => {
  const { user } = useContext(AuthContext);

  // ["2020 Main St", "100 Washington Ave", "450 West Blvd", "1330 Green St", "78 Bigsby Rd"]

  const [properties, setProperties] = useState([]);
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(0);

  useEffect(() => {
    API.Properties.getAll()
      .then(response => response.data)
      .then(properties => setProperties(properties.properties))
      .catch(err => console.log(err));
  }, [])

  const handleChange = event => {
    setSelectedPropertyIndex(parseInt(event.target.value));
  }



  // if (!user || user.role !== "nt") {
  //     return <Redirect to = "/" />
  // }
  //   return ( EVERYTHING IN THE RETURN BELOW )

  return (
    <div style={{ marginTop: "40vh" }}>

      <h1>New Property Form</h1>
      <form>
        <label>
          Address:
          <input placeholder={properties.length && properties[selectedPropertyIndex].address} />
        </label>
        <label>
          Date:
          <input placeholder={properties.length && properties[selectedPropertyIndex].date} />
        </label>
        <label>
          Task:
          <input placeholder={properties.length && properties[selectedPropertyIndex].task} />
        </label>
        <input type="submit" value="Submit New Property" />
      </form>

      

      <h1>Property Details</h1>
      <form>
        <label className="text">
          Select your property
          <select value={selectedPropertyIndex} onChange={handleChange}>
            {properties.length && properties.map(property => <option value={property.propertyId - 1}>{property.address}</option>)}
          </select>
        </label>
      </form>
      <br></br>
      <ul style={{width: "20vw", margin: "0 auto"}}>
        <li> Address: {properties.length && properties[selectedPropertyIndex].address}</li>
        <li> Date: {properties.length && properties[selectedPropertyIndex].date}</li>
        <li> Task: {properties.length && properties[selectedPropertyIndex].task}</li>
      </ul>
    </div>
  )
};

export default Client
