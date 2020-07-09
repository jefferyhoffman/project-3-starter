import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./Persons.css";

axios.get('/api/characters')

const Persons= ()=> {
  const [people,setpeople]=useState([])

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
              
                <article className="box">
                   <h1 className="is-size-3 has-text-centered">{person.name}</h1>
                    <img
                      src={person.picture}
                      alt={person.name}
                      style={{ width: "200px", height: "200px" }}
                    />
                </article>
              
            ))}
          </div>
        
      </div>
    )
  
}
export default Persons;