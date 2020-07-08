import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'


const Characters = () => {
    const [character, setCharacter] = useState({
        isFlipped: false,
        guess: "",
        who: "Bob",
        score: 10,
        Chars: [],
        choice: '',
        whoImg: ''
    })

    //handle card flip
    const handleFlip = () => {
        setCharacter(prevState => ({ isFlipped: !prevState.isFlipped }));
    };

    useEffect(() =>{
       axios.get('/api/characters')
            .then((res) => {
                setCharacter({ choice: Math.round(Math.random() * 9) })
                setCharacter({ Chars: res.data })
                setCharacter({ who: res.data[this.state.choice].name })
                setCharacter({ whoImg: res.data[this.state.choice].picture })
                setCharacter({})
            }) 
    }, []);
        
    handleInputChange = event => {
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
