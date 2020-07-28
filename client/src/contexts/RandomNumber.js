import React,{createContext,useState} from 'react';

export const  RandomNumberContext = createContext();

const RandomNumberContextProvider = (props) => {
    
    const[RandomNumber, setRandomNumber]=useState(Math.floor(Math.random() * 27))

  

    return(
        <RandomNumberContext.Provider value={{RandomNumber,setRandomNumber}}>

        {props.children}

        </RandomNumberContext.Provider>
     )

}

export default RandomNumberContextProvider