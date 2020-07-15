import React, {useState, useContext, useEffect } from "react";
import {TimeContext} from '../../contexts/Time'
import './Timer.css'

const Time = () => {

  const[underTen, setUnderTen]=useState(true)
  const {Time} = useContext(TimeContext)
  const Minutes = Math.floor(Time/60 )
  const elapsedSeconds = 300-Time
  const secondsLeft = (300-elapsedSeconds)%60
 
  
  function getFormattedSeconds() {
  
    if (secondsLeft < 10) {
      setUnderTen(true)
    } else{
      setUnderTen(false)
    }
  
  }
  


  useEffect(()=>{
    getFormattedSeconds()
    console.log(Minutes)
  },[Time])

   return(
    
       <div className="box TimeBox">
       <div className="box">
         <h4 className="is-size-4" >Time: {Minutes}:{underTen ? "0"+secondsLeft:secondsLeft}</h4>
         </div>
         </div>
    
   )
}
export default Time