import React,{createContext,useState, useEffect} from 'react';

export const  TimeContext = createContext();

const TimeContextProvider = (props) => {
    
    const[Time, setTime]=useState(0)

    

    return(
        <TimeContext.Provider value={{Time,setTime}}>

        {props.children}

        </TimeContext.Provider>
     )

}

export default TimeContextProvider