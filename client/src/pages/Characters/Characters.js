import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'

const Characters = () => {
    const [character, setCharacter] = useState([]);
    const [isFlipped, setisFlipped] = useState(false);

    //handle card flip
    const handleFlip = (e) => {
        e.preventDefault()
        setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
    };

    useEffect(() => {
        axios.get('/api/characters')
            .then((res) => {
                setCharacter(res.data)
            })
    }, []);

    return (
        <div className="container">
            <div className="columns is-centered">
                <h1 className="is-size-1">😻Characters😻</h1>
            </div>
            <br />

            <div className="columns is-centered is-multiline">

                {/* Mapping through characters to render api */}
                {character.map((char) => {
                    return (
                        <div className="column is-one-quarter">
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div className="box" style={{ maxHeight: "400px" }} onClick={handleFlip}>
                                <h4> {char.name}</h4>
                                <img alt={char.name} src={char.picture} style={{ width: "200px", height: "200px" }} />
                        </div>

                        <div className="box" style={{ maxHeight: "400px" }}>
                                <p>{char.fact}</p>
                            
                        </div>
                        </ReactCardFlip>
                            
                        </div>
                    )
                })}
                {/* End of map */}
            </div>

        </div>
    )


}

export default Characters
