import React, { useState, useEffect } from "react";
import axios from 'axios'


axios.get('/api/characters')

const Persons= ()=> {
  const [people,setpeople]=useState([])

  const handleClick = () => {
   const name = document.getElementsByClassName("button").value
   console.log(name)
  }
  

  useEffect(() => {
    axios.get("/api/characters").then((res) => {
      setpeople(res.data)

    })
  }, [])
    return (
      <div className="container">
        <div className="columns is-centered">
          <h1 className="is-size-1">😻Character Selection😻</h1>
        </div>
        <br/>
       
        <div className="columns is-centered is-multiline">
            {people.map(person => (
              <div className="column is-one-quarter">
                <div className="box charBox">
                <div key={person._id} className="box" style={{ maxHeight: "400px" }}>
                   <h4 className=" has-text-centered">{person.name}</h4>
                    <img
                      src={person.picture}
                      alt={person.name}
                      style={{ width: "200px", height: "200px" }}
                      onclick={handleClick}
                    />
                    <button className="button is-warning" onClick={handleClick} value={person.name} >Guess Me</button>
                </div>
                </div>
                </div>
            ))}
            </div>
        
      </div>
    )
  
}
export default Persons;