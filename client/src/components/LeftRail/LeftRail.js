import React from "react";
import IngredientDropdown from '../IngredientDropdown/IngredietDropdown'
import {
  Grid,
  Checkbox,
  Rail,
  Segment,
  Responsive,
  Sticky,
  Button,
} from "semantic-ui-react";
import "./LeftRail.css";

const LeftRail = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Rail position="left">
        <Sticky>
          <Responsive as={IngredientDropdown} minWidth={1800}></Responsive>
          <Responsive as={Segment} minWidth={1800} className="flexColumn">
            <strong>What's the occasion?</strong>
            <Checkbox className='checks' label="Breakfast" />
            <Checkbox className='checks' label="Lunch" />
            <Checkbox className='checks' label="Dinner" />
            <Checkbox className='checks' label="Dessert" />
            <Checkbox className='checks' label="Snacks" />
            <Button className='checks'>Ok</Button>
          </Responsive>
        </Sticky>
      </Rail>
    </Grid.Column>
  </Grid>
);

export default LeftRail;
