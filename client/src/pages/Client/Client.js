
import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Client = () => {
  const { user } = useContext(AuthContext);

  // ["2020 Main St", "100 Washington Ave", "450 West Blvd", "1330 Green St", "78 Bigsby Rd"]

  const [properties, setProperties] = useState([
    //get rid of dummy date after db is populated
    {
      propertyId: 1,
      address: "2020 Main St",
      date: "date here",
      task: "task sample",
      employeeComments: ["emp comment 1", "emp comment 2"],
      clientComments: ["client comment 1", "client comment 2"],
      photo: "www.google.com"
    },
    {
      propertyId: 2,
      address: "450 West Blvd",
      date: "date here",
      task: "task sample",
      employeeComments: ["emp comment 1", "emp comment 2"],
      clientComments: ["client comment 1", "client comment 2"],
      photo: "www.google.com"
    }
  ]);

  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(properties[0].propertyId - 1);

  // useEffect(()=>{
  //  api call to get properties here
  //  setProperties(apiDataHere)
  // },[])

  const handleChange = event => {
    setSelectedPropertyIndex(parseInt(event.target.value));
  }

  const handleSubmit = event => {
    alert(`
    Selected Property ID: ${selectedPropertyIndex + 1}
    Selected Property Address: ${properties[selectedPropertyIndex].address}
    Selected Property Date: ${properties[selectedPropertyIndex].date}
    Selected Property Task: ${properties[selectedPropertyIndex].task}
    Selected Property Employee Comments: ${properties[selectedPropertyIndex].employeeComments}
    Selected Property Client Comments: ${properties[selectedPropertyIndex].clientComments}
    Selected Property photo url: ${properties[selectedPropertyIndex].photo}
    `);
    event.preventDefault();
  }


  // if (!user || user.role !== "Client") {
  //     return <Redirect to = "/" />
  // }
  //   return ( EVERYTHING IN THE RETURN BELOW )

  return (
    <div style={{ marginTop: "40vh" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Select your property
          <select value={selectedPropertyIndex} onChange={handleChange}>
            {properties.length && properties.map(property => <option value={property.propertyId - 1}>{property.address}</option>)}
          </select>
        </label>
        <input type="submit" value="Select Property" />
      </form>

      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    </div>
  )
};

export default Client
