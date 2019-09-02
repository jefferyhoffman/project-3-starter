import React, { Component } from "react";
import InputCheck from "../../components/InputCheck";

import "./style.css";

const listGenres = [
  {
    name: "Rock",
    value: "rock",
    subgenres: [
      {
        name: "Alternative",
        value: "alternative"
      },
      {
        name: "Classic",
        value: "classic"
      }
    ]
  },
  {
    name: "Blues",
    value: "blues",
    subgenres: [
      {
        name: "African",
        value: "african"
      },
      {
        name: "Acoustic",
        value: "acoustic"
      },
      {
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
              id={genre.value}
              genre={genre.name}
              value={genre.value}
            />
          </summary>
          {genre.subgenres.map((subgenre) => (
            <InputCheck
              extraClass="subgenre"
              id={subgenre.value}
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
