import React,{createContext,useState} from 'react';

export const  ScoreContext = createContext();

const ScoreContextProvider = (props) => {
    
    const[score, setscore]=useState(10)

    const decrementScore=(value)=>{
        setscore(score - value)
    }

    return(
        <ScoreContext.Provider value={{score,decrementScore}}>

        {props.children}

        </ScoreContext.Provider>
     )

}

export default ScoreContextProvider