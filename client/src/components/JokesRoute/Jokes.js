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

  console.log(result.data)
    

        return (
            <div>
                {/* {result.jokes?(
                    <ul>

                    {result.jokes.map(joke=>(
                        joke.data?<li key={joke.id}>{joke.data}</li>:
                        (<li key={joke.id}>{joke.setup}? {joke.punchline}</li>))
                    
                    )}
                    
                    </ul>
                ):(<></>)} */}

        
             </div> 
        );
    
}

export default Jokes;
