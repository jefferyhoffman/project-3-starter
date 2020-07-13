import React, { useState, useEffect } from "react";
import CharacterContainer from '../CharacterContainer/CharacterContainer'
import axios from 'axios'


axios.get('/api/characters')

const Persons= ()=> {
  const [character,setcharacter]=useState([])
   
  useEffect(() => {
    axios.get("/api/characters").then((res) => {
      setcharacter(res.data)

    })
  }, [])
    return (
      <div className="container">
        <div className="columns is-centered">
          <h1 className="is-size-1">😻Character Selection😻</h1>
        </div>
        <br/>
       
        <div className="columns is-centered is-multiline">
        {character.map((char) => {
                    return (
                        <CharacterContainer key={char._id} name={char.name} image={char.picture} story={char.story}/>   
                    )
                })}
            </div>
        
      </div>
    )
  
}
export default Persons;