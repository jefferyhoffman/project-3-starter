import React, { Component } from "react";
import "./Persons.css";
const people = [
  {
    name: "bob",
    img:
      "https://i.pinimg.com/564x/4f/24/7a/4f247acf992487b5f1d8bdd641f6bd50.jpg"
  },
  {
    name: "tina",
    img:
      "https://i.pinimg.com/564x/7e/4a/d6/7e4ad6637c49a7734c3cd9a0f859da1f.jpg"
  },
  {
    name: "bill",
    img:
      "https://i.pinimg.com/564x/37/85/a2/3785a25aed66087ea2b9bda233344242.jpg"
  },
  {
    name: "Jimmy",
    img:
      "https://vignette.wikia.nocookie.net/southpark/images/6/63/Jimmy_valmer_here.png/revision/latest/scale-to-width-down/310?cb=20170815180902"
  },
  {
    name: "Bart",
    img:
      "https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/300px-Bart_Simpson.png"
  }
];

class Persons extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <h1 className="is-size-1">😻Character Selection😻</h1>
        </div>
        <br/>
          <div className="columns is-centered">
        <div className="tile is-ancestor">
            {people.map(person => (
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Persons;