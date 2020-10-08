import React, { useEffect, useState } from "react";
//import jokesController from "../../../../server/controllers/api/jokesController";
//import jokesController from "../../../../server/controllers/api/jokesController";
import API from '../../lib/API'

const Jokes =props=>{
    const[result, setResult] = useState([])
   
  useEffect(()=>{
      API.Jokes.getJokes()
      .then(({data})=>setResult(data))

  },[API.Jokes])
    

        return (
            <div>
                {result.jokes?(
                    <ul>

                    {result.jokes.map(joke=>(
                        joke.joke?<li key={joke.id}>{joke.joke}</li>:
                        (<li key={joke.id}>{joke.setup}? {joke.delivery}</li>))
                    
                    )}
                    
                    </ul>
                ):(<></>)}
        
             </div> 
        );
    
}

export default Jokes;
