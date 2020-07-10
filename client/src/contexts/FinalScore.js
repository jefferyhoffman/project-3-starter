import React,{createContext,useState} from 'react';

export const  FinalScoreContext = createContext();

const FinalScoreContextProvider = (props) => {
    
    const[finalScore, setFinalScore]=useState(0)

    const incrementFinalScore=(value)=>{
        setFinalScore(finalScore + value)
    }

    return(
        <FinalScoreContext.Provider value={{finalScore,incrementFinalScore}}>

        {props.children}

        </FinalScoreContext.Provider>
     )

}

export default FinalScoreContextProvider