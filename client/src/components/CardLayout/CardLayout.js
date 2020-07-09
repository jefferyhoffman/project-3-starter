import React from "react";
import { Card, Rating, Container, Image, Responsive, Segment } from "semantic-ui-react";
import "./CardLayout.css";

const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

//Below is a group of cards for styling purposes. 3 items per row looks good on desktop, 1 looks best on mobile.
const CardLayout = () => (
  <Container className="test">
    <Responsive maxWidth="600">
    {/* <Image src={require("../../assets/images/megabitesLogo.png")}/> */}
    <Card.Group itemsPerRow={1}>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
    </Card.Group>
    </Responsive>
    <Responsive minWidth="601">
    <Card.Group itemsPerRow={3}>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
    </Card.Group>
    </Responsive>
  </Container>
);

export default CardLayout;



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
//             <Card.Header>Tasty Burger!</Card.Header>
//             <Card.Meta>
//               <span>Lunch, Dinner</span>
//             </Card.Meta>
//             <Card.Description>
//               This is one tasty burger. It is a heart attack in a bun! Easy to
//               make with a relatively small list of ingredients. This is
//               guaranteed to be a crowd pleaser!
//             </Card.Description>
//             <Card.Meta>
//               <span>
//                 Submitted by: <strong>UserName</strong>
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
