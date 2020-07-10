import React from "react";
import {
  Grid,
  Checkbox,
  Segment,
  Responsive,
  Button,
} from "semantic-ui-react";
import IngredientDropdown from "../IngredientDropdown/IngredietDropdown";
import "./TopRail.css";

const TopRail = () => (
  <Grid centered>
    <Grid.Column width={16} style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
      <Responsive as={IngredientDropdown} maxWidth={1799}></Responsive>
      <Responsive as={Segment} maxWidth={1799} className="horizontal">
        <strong>What's the occasion?</strong>
        <Checkbox className="checks" label="Breakfast" />
        <Checkbox className="checks" label="Lunch" />
        <Checkbox className="checks" label="Dinner" />
        <Checkbox className="checks" label="Dessert" />
        <Checkbox className="checks" label="Snacks" />
        <Button className="checks">Ok</Button>
      </Responsive>
    </Grid.Column>
  </Grid>
);

export default TopRail;
