import React, { useEffect, useState, Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import './CharacterContainer.css'
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
               <div className="box charBox">
                <div key={props._id} className="box" style={{ maxHeight: "400px" }} onClick={handleFlip}>
                    <p> {props.name}</p>
                    <img alt={props.name} src={props.image} style={{ width: "200px", height: "200px" }} />
                </div>
            </div>

                <div className="box" style={{ maxHeight: "400px" }} onClick={handleFlip}>
                    <p>{props.fact}</p>
                </div>
            </ReactCardFlip>
    </div>
  
    )
}
export default CharacterContainer;