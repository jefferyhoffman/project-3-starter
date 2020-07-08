import React from 'react'
import ReactCardFlip from 'react-card-flip';
import axios from 'axios'


const Characters = () => {

    

    return (
        <div className="container">
        <div className="columns is-centered">
          <h1 className="is-size-1">😻Character Selection😻</h1>
        </div>
        <br/>
          <div className="columns is-centered">
        <div className="tile is-ancestor">
            {/* {people.map(person => (
              <div className="tile is-parent">
                <article className="tile is-child box cardBox">
                  <article className="tile is-child box">
                    <h1 className="is-size-3 has-text-centered">{person.name}</h1>
                    <img
                      src={person.img}
                      alt={person.name}
                      style={{ width: "200px", height: "200px" }}
                    />
                  </article>
                </article>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    )
}

export default Characters
