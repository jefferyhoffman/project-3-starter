import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'
import CharacterContainer from '../../components/CharacterContainer/CharacterContainer';

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
                        <CharacterContainer key={char._id} name={char.name} image={char.picture} fact={char.fact}/>
                        
                    )
                })}
                {/* End of map */}
            </div>
        </div>
    )
}

export default Characters
