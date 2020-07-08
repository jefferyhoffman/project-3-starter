import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'

const Characters = () => {
    const [character, setCharacter] = useState([]);

    //handle card flip
    const handleFlip = () => {
        setCharacter(prevState => ({ isFlipped: !prevState.isFlipped }));
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
                            <div className="box" style={{ maxHeight: "400px" }}>
                                <h4> {char.name}</h4>
                                <img alt={char.name} src={char.picture} style={{ width: "200px", height: "200px" }} />

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                                and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                
                            </div>
                        </div>
                    )
                })}
                {/* End of map */}
            </div>

        </div>
    )


}

export default Characters
