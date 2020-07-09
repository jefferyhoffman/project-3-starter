import React, { useContext } from "react";
import "./Score.css";
import { ScoreContext } from '../scoreContext.js'

const Score = () => {
  const {score} = useContext(ScoreContext)

   return(
     <div className="column is-one-quarter">
       <div className="box"></div>
         <h1 className="is-size-1">{score}</h1>
     </div>
   )
}
export default Score