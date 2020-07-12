import React, { useContext } from "react";
import {TimeContext} from '../../contexts/Time'
<<<<<<< HEAD
import Bulma from '@vizuaalog/bulmajs'

const Time = () => {
  const {Time} = useContext(TimeContext)
  
    
  
  
  
  
  return(
=======
import axios from 'axios';

const Time = () => {
  const {Time} = useContext(TimeContext)

  


   return(
>>>>>>> 508cb68be6810a21c2fa50fcec7494a14255dfff
    
       <div className="box TimeBox">
       <div className="box">
         <h4 className="is-size-4" >Time: {Time}</h4>
         </div>
         </div>
    
   )
}
export default Time