import React from "react";
import IngredientDropdown from '../IngredientDropdown/IngredietDropdown'
import {
  Grid,
  Checkbox,
  Rail,
  Segment,
  Responsive,
  Sticky,
} from "semantic-ui-react";
import "./LeftRail.css";

const checkbox1 = () => <Checkbox label="Breakfast" />;

const checkbox2 = () => <Checkbox label="Lunch" />;

const checkbox3 = () => <Checkbox label="Dinner" />;

const checkbox4 = () => <Checkbox label="Dessert" />;

const checkbox5 = () => <Checkbox label="Snacks" />;

const LeftRail = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Rail position="left">
        <Sticky>
          <Responsive as={IngredientDropdown} minWidth={1870}></Responsive>
          <Responsive as={Segment} minWidth={1870} className="flexColumn">
            <strong>What's the occasion?</strong>
            <br></br>
            {checkbox1()}
            <br></br>
            {checkbox2()}
            <br></br>
            {checkbox3()}
            <br></br>
            {checkbox4()}
            <br></br>
            {checkbox5()}
          </Responsive>
        </Sticky>
      </Rail>
    </Grid.Column>
  </Grid>
);

export default LeftRail;
