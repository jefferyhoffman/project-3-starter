import React,{createContext,useState, useEffect} from 'react';

export const  TimeContext = createContext();

const TimeContextProvider = (props) => {
    
    const[Time, setTime]=useState(0)

    useEffect(()=>{
        setInterval(() => {
        switch(Time){
            case Time>0:
                setTime(Time -1)
            break
            case Time<0:
                setTime(0)
            break
        }
        }, 1000);
       },[Time])

    return(
        <TimeContext.Provider value={{Time,setTime}}>

        {props.children}

        </TimeContext.Provider>
     )

}

export default TimeContextProvider