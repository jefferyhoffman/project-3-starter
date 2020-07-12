import React from "react";
import {
  Grid,
  Checkbox,
  Rail,
  Segment,
  Responsive,
  Button,
} from "semantic-ui-react";
import "./LeftRail.css";

const LeftRail = () => {
  const handleChange = (e, data) => {
    console.log(data.label);
  };
  return (<Grid centered columns={2}>
    <Grid.Column>
      <Rail position="left">
          {/* <Responsive as={IngredientDropdown} minWidth={1800}></Responsive> */}
          <Responsive as={Segment} minWidth={1800} className="flexColumn">
            <strong>What's the occasion?</strong>
            <Checkbox className='checks' label="Casual Dining" onChange={handleChange} />
            <Checkbox className='checks' label="Entree" onChange={handleChange}/>
            <Checkbox className='checks' label="Breakfast" onChange={handleChange}/>
            <Checkbox className='checks' label="Lunch" onChange={handleChange}/>
            <Checkbox className='checks' label="Dinner" onChange={handleChange}/>
            <Checkbox className='checks' label="Crock-Pot" onChange={handleChange}/>
            <Checkbox className='checks' label="Dessert" onChange={handleChange}/>
            <Checkbox className='checks' label="Cookies" onChange={handleChange}/>
            <Checkbox className='checks' label="Syrup" onChange={handleChange}/>
            <Checkbox className='checks' label="Non-Chick Food" onChange={handleChange}/>
            <Checkbox className='checks' label="Italian" onChange={handleChange}/>
            <Checkbox className='checks' label="Mexican" onChange={handleChange}/>
            <Checkbox className='checks' label="Pasta" onChange={handleChange}/>
            <Checkbox className='checks' label="Side Dish" onChange={handleChange}/>
            <Checkbox className='checks' label="Vegetable Dish" onChange={handleChange}/>
            <Checkbox className='checks' label="Chili" onChange={handleChange}/>
            <Checkbox className='checks' label="Easy Recipes" onChange={handleChange}/>
            <Checkbox className='checks' label="Fancy Fixins" onChange={handleChange}/>
            <Button className='checks'>Ok</Button>
          </Responsive>
      </Rail>
    </Grid.Column>
  </Grid>);
};

export default LeftRail;

// const LeftRail = () => (
//   <Grid centered columns={2}>
//     <Grid.Column>
//       <Rail position="left">
//         <Sticky>
//           {/* <Responsive as={IngredientDropdown} minWidth={1800}></Responsive> */}
//           <Responsive as={Segment} minWidth={1800} className="flexColumn">
//             <strong>What's the occasion?</strong>
//             <Checkbox className='checks' label="Breakfast" />
//             <Checkbox className='checks' label="Lunch" />
//             <Checkbox className='checks' label="Dinner" />
//             <Checkbox className='checks' label="Dessert" />
//             <Checkbox className='checks' label="Snacks" />
//             <Button className='checks'>Ok</Button>
//           </Responsive>
//         </Sticky>
//       </Rail>
//     </Grid.Column>
//   </Grid>
// );