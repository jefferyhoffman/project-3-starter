import React, { useEffect, useState } from "react";
import API from '../../lib/API'

const styles = {
    card: {
        fontFamily: "'Playfair Display', serif",
        color: "black"
    }
}

const Jokes = props => {
    const [result, setResult] = useState([])

    useEffect(() => {
        API.Jokes.getJokes()
            .then(({ data }) => setResult(data))

    }, [API.Jokes])
    console.log(result.data)
    

        return (
            <div>
                <p style={styles.card}> {result.setup}</p>
                <p style={styles.card}>{result.punchline}</p>
                </div> 
                
        );
    
}

export default Jokes;
