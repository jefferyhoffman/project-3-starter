import React, { useContext } from "react";
import {FinalScoreContext} from '../../contexts/FinalScore'

const FinalScore = () => {
  const {finalScore} = useContext(FinalScoreContext)

   return(
     
       <div className="box finalScoreBox">
       <div className="box">
         <h4 className="is-size-4">finalScore: {finalScore}</h4>
         </div>
         </div>
     
   )
}
export default FinalScore