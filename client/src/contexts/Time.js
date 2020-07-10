import React,{createContext,useState} from 'react';

export const  TimeContext = createContext();

const TimeContextProvider = (props) => {
    
    const[Time, setTime]=useState(300)

    const decrementTime=(value)=>{
        setTime(Time - value)
    }

    return(
        <TimeContext.Provider value={{Time,decrementTime}}>

        {props.children}

        </TimeContext.Provider>
     )

}

export default TimeContextProvider