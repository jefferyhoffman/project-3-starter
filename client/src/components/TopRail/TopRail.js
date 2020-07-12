import React from "react";
import {
  Dropdown,
  Grid,
  Checkbox,
  Segment,
  Responsive,
  Button,
} from "semantic-ui-react";
// import IngredientDropdown from "../IngredientDropdown/IngredietDropdown";
import "./TopRail.css";

const foodOptions = [
  { key: 1, text: 'Casual Dining', value: 1 },
  { key: 2, text: 'Entree', value: 2 },
  { key: 3, text: 'Breakfast', value: 3 },
  { key: 4, text: 'Lunch', value: 4 },
  { key: 5, text: 'Dinner', value: 5 },
  { key: 6, text: 'Crock-Pot', value: 6 },
  { key: 7, text: 'Dessert', value: 7 },
  { key: 8, text: 'Cookies', value: 8 },
  { key: 9, text: 'Syrup', value: 9 },
  { key: 10, text: 'Non-Chick Food', value: 10 },
  { key: 11, text: 'Italian', value: 11 },
  { key: 12, text: 'Mexican', value: 12 },
  { key: 13, text: 'Pasta', value: 13 },
  { key: 14, text: 'Side Dish', value: 14 },
  { key: 15, text: 'Vegetable Dish', value: 15 },
  { key: 16, text: 'Chili', value: 16 },
  { key: 17, text: 'Easy Recipes', value: 17 },
  { key: 18, text: 'Fancy Fixins', value: 18 },
];

const TopRail = () => {
  const handleChange = (e, data) => {
    console.log(data.value);
  };
  return (
    <Responsive
      as={Dropdown}
      maxWidth={1799}
      onChange={handleChange}
      className="width"
      placeholder="Food Category"
      fluid
      selection
      options={foodOptions}
    />
  );
};

export default TopRail;

// const TopRail = () => (
//   <Grid centered>
//     <Grid.Column width={16} style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
//       {/* <Responsive as={IngredientDropdown} maxWidth={1799}></Responsive> */}
//       <Responsive as={Segment} maxWidth={1799} className="horizontal">
//         <strong>What's the occasion?</strong>
//         <Checkbox className="checks" label="Breakfast" />
//         <Checkbox className="checks" label="Lunch" />
//         <Checkbox className="checks" label="Dinner" />
//         <Checkbox className="checks" label="Dessert" />
//         <Checkbox className="checks" label="Snacks" />
//         <Button className="checks">Ok</Button>
//       </Responsive>
//     </Grid.Column>
//   </Grid>
// );
