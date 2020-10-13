import React, { useEffect, useState } from "react";
import API from '../../lib/API'

const Jokes = props => {
    const [result, setResult] = useState([])

    useEffect(() => {
        API.Jokes.getJokes()
            .then(({ data }) => setResult(data))

    }, [API.Jokes])
    console.log(result.data)
    

        return (
            <div>
                <p> "{result.setup}"</p>
                <p>{result.punchline}</p>
                </div> 
                
        );
    
}

export default Jokes;
{/* {result.data?(
                    <ul>

                    {result.data.map(joke=>(
                        joke.data?<li key={joke.id}>{joke.data}</li>:
                        (<li key={joke.id}>{joke.setup}? {joke.punchline}</li>))
                    
                    )}
                    
                    </ul>
                ):(<></>)} */}