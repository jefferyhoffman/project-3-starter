import React,{createContext,useState} from 'react';

export const  whoContext = createContext();

const WhoContextProvider = (props) => {
    
    const[who, setwho]=useState("")

    const updateWho=(value)=>{
        setwho(value)
    }

    return(
        <whoContext.Provider value={{who,updateWho}}>

        {props.children}

        </whoContext.Provider>
     )

}

export default WhoContextProvider