import React, { Component } from "react";
import InputCheck from "../../components/InputCheck";

import "./style.css";

const listGenres = [
  {
    id: 1,
    name: "Rock",
    value: "rock",
    subgenres: [
      {
        id: 1.1,
        name: "Alternative",
        value: "alternative"
      },
      {
        id: 1.2,
        name: "Classic",
        value: "classic"
      }
    ]
  },
  {
    id: 2,
    name: "Blues",
    value: "blues",
    subgenres: [
      {
        id: 2.1,
        name: "African",
        value: "african"
      },
      {
        id: 2.2,
        name: "Acoustic",
        value: "acoustic"
      },
      {
        id: 2.3,
        name: "Rock",
        value: "rock"
      }
    ]
  }
];

function InputCheckDropdown(props) {
  return (
    <div>
      {listGenres.map((genre) => (
        <details>
          <summary>
            <InputCheck
              extraClass="main-genre"
              id={genre.id}
              genre={genre.name}
              value={genre.value}
            />
          </summary>
          {genre.subgenres.map((subgenre) => (
            <InputCheck
              extraClass="subgenre"
              id={subgenre.id}
              genre={subgenre.name}
              value={subgenre.value}
            />
          ))}
        </details>
      ))}
    </div>
  );
}

export default InputCheckDropdown;
