import React, { useContext } from "react";
import {FinalScoreContext} from '../../contexts/FinalScore'
import './FinalScore.css'
const FinalScore = () => {
  const {finalScore} = useContext(FinalScoreContext)

   return(
     
       <div className="box finalScoreBox">
       <div className="box">
         <h4 className="is-size-5">FinalScore: {finalScore}</h4>
         </div>
         </div>
     
   )
}
export default FinalScore