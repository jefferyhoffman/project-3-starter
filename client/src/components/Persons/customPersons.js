import React, { useState, useEffect, useContext } from "react";
import CharacterContainer from '../CharacterContainer/CharacterContainer'




const CustomPersons= ()=> {
    const [character,setcharacter]=useState([])
   
    useEffect(()=>{
        setcharacter(JSON.parse(localStorage.getItem('customChars'))||[])
        console.log(character)
    },[])

    return (
      <div className="container">
        <div className="columns is-centered">
          <h1 className="is-size-1" >Meet Your Teammates!</h1>
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
export default CustomPersons;