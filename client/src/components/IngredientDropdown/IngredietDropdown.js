import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./IngredientDropdown.css";

const foodOptions = [
  { key: "tacos", text: "Tacos", value: "tacos" },
  { key: "burgers", text: "Burgers", value: "burgers" },
  { key: "lasagna", text: "Lasagna", value: "lasagna" },
  { key: "spaghetti", text: "Spaghetti", value: "spaghetti" },
  { key: "salad", text: "Salad", value: "salad" },
];

//This was being used in the leftRail and topRail initially but has been replaced. This component is no longer being used but will remain here incase we need something similar.

const IngredientDropdown = () => {
  const handleChange = (e, data) => {
    console.log(data.value);
  };
  return (
    <Dropdown
      onChange={handleChange}
      className="widthSmall"
      placeholder="Recipe Name"
      fluid
      selection
      options={foodOptions}
    />
  );
};

export default IngredientDropdown;
