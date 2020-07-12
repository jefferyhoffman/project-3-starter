import React, { useContext } from "react";
import {TimeContext} from '../../contexts/Time'
import Bulma from '@vizuaalog/bulmajs'

const Time = () => {
  const {Time} = useContext(TimeContext)
  
    
  
  
  
  
  return(
    
       <div className="box TimeBox">
       <div className="box">
         <h4 className="is-size-4" >Time: {Time}</h4>
         </div>
         </div>
    
   )
}
export default Time