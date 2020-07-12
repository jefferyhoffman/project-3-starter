import React, { Component } from "react";
import { Card, Rating, Container, Image, Responsive } from "semantic-ui-react";
import RecipeCard from "../RecipeCard/RecipeCard";

import API from "../../lib/API";
import "./CardLayout.css";

const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

//Below is a group of cards for styling purposes. 3 items per row looks good on desktop, 1 looks best on mobile.
class CardLayout extends Component {
  state = {
    recipes: [],
    err: "",
  };

  componentDidMount() {
    API.Recipes.all()
      .then((response) => {
        this.setState({ recipes: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }
  render() {
    return (
      <RecipeCard recipes={this.state.recipes} />
    );
  }
}

export default CardLayout;

// title={this.state.recipes[0].title}

//Below is a single card rendered within the grid based on how many recipes are being mapped over.
// import React from "react";
// import { Card, Rating, Container, Image } from "semantic-ui-react";
// import "./CardLayout.css";

// const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;
// // console.log(window.innerWidth);

// //When backend database is connected, will fill in each section with information for each recipe object.
// const CardLayout = (props) => {
//   const recipeArea = props.recipes.map(recipe => {
//     return(
//       <Card>
//           <Image
//             src={require("../../assets/images/burger1.jpg")}
//             wrapped
//             ui={false}
//             as="a"
//             href="https://www.thewholesomedish.com/the-best-classic-burger/"
//             target="_blank"
//           />
//           <Card.Content>
//             <Card.Header>{recipe.name}</Card.Header>
//             <Card.Meta>
//               <span>{recipe.category}</span>
//             </Card.Meta>
//             <Card.Description>
//               {recipe.description}
//             </Card.Description>
//             <Card.Meta>
//               <span>
//                 Submitted by: <strong>{recipe.createdBy}</strong>
//               </span>
//             </Card.Meta>
//           </Card.Content>
//           <Card.Content>{extra}</Card.Content>
//         </Card>
//     )
//   })

//   return (
//     <Container className="test">
//       <Card.Group className="background" itemsPerRow={3}>
//         {recipeArea}
//       </Card.Group>
//     </Container>
//   );
// };

// export default CardLayout;

// itemsPerRow={3}
