import React, { useContext, useEffect } from "react";
import {TimeContext} from '../../contexts/Time'


const Time = () => {
  const {Time} = useContext(TimeContext)
  const Minutes = Math.floor(Time/60 )
  const elapsedSeconds = 300-Time
  const secondsLeft = (300-elapsedSeconds)%60
  


  useEffect(()=>{
    console.log(Minutes)
  },[Time])

   return(
    
       <div className="box TimeBox">
       <div className="box">
         <h4 className="is-size-4" >Time: {Minutes}:{secondsLeft}</h4>
         </div>
         </div>
    
   )
}
export default Time