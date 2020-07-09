import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';

const CharacterContainer = (props) => {


    const [isFlipped, setisFlipped] = useState(false);

    //handle card flip
    const handleFlip = (e) => {
        e.preventDefault();
        setisFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
    };
    return (

        <div className="column is-one-quarter">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className="box" style={{ maxHeight: "400px" }} onClick={handleFlip}>
                    <h4> {props.name}</h4>
                    <img alt={props.name} src={props.image} style={{ width: "200px", height: "200px" }} />
                </div>

                <div className="box" style={{ maxHeight: "400px" }} onClick={handleFlip}>
                    <p onClick={handleFlip}>{props.fact}</p>
                </div>
            </ReactCardFlip>

        </div>
    )
}
export default CharacterContainer;