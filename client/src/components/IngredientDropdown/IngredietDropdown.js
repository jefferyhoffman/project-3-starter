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

//This will console log the items that are selected from the dropdown in an array.
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
      multiple
      search
      selection
      options={foodOptions}
    />
  );
};

export default IngredientDropdown;
