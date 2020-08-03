import React, { useContext } from "react";
import "./Score.css";
import { ScoreContext } from '../../contexts/scoreContext.js'

const Score = () => {
  const {score} = useContext(ScoreContext)

   return(
     <div className="column is-2">
       <div className="box scoreBox">
       <div className="box">
         <h4 className="is-size-4">Score: {score}</h4>
         </div>
         </div>
     </div>
   )
}
export default Score