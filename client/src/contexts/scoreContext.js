import React,{createContext,useState} from 'react';

export const  ScoreContext = createContext();

const ScoreContextProvider = (props) => {
    
    const[score, setscore]=useState(10)

  

    return(
        <ScoreContext.Provider value={{score,setscore}}>

        {props.children}

        </ScoreContext.Provider>
     )

}

export default ScoreContextProvider