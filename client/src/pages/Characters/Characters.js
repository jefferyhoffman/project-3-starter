import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'


const Characters = () => {
    const [character, setCharacter] = useState({
        isFlipped: false,
        name: "",
        hairColor: "",
        glasses: true,
        facialHair: true ,
        eyeColor: "",
        fact: "",
        story:""
    })

    //handle card flip
    const handleFlip = () => {
        setCharacter(prevState => ({ isFlipped: !prevState.isFlipped }));
    };

    useEffect(() =>{
       axios.get('/api/characters')
            .then((res) => {
                setCharacter({ name: res.data.name })
                setCharacter({ hairColor: res.data.hairColor })
                setCharacter({ glasses: res.data.glasses })
                setCharacter({ facialHair: res.data.facialHair })
                setCharacter({ eyeColor: res.data.eyeColor })
                setCharacter({ fact: res.data.fact})
                setCharacter({story: res.data.story})
            }) 
    }, []);
        
    const handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    return (
        <div className="container">
            <div className="columns is-centered">
                <h1 className="is-size-1">😻Characters😻</h1>
            </div>
            <br />
            <div className="columns is-centered">
                <div className="tile is-ancestor">

                    {/* Mapping through characters to render api */}

                    {/* End of map */}
                </div>
            </div>
        </div>
    )


}

export default Characters
