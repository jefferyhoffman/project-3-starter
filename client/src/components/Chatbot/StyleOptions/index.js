import React from "react";

import "./style.css";

const StyleOptions = (props) => {
  const options = [
    { text: "Yes", 
    handler: props.actionProvider.handleStyleOptionsList, 
    id: 1 },
    { text: "Hell yeah!", handler: props.actionProvider.handleStyleOptionsList, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="style-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="style-options-container">{optionsMarkup}</div>;
};

export default StyleOptions;