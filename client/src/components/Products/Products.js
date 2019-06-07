import React from "react";
import "./style.css"
import styled from "@emotion/styled/macro";

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

const Background = styled.div({
  // Other background code
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});


function ProductCard(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img id="watchList" src={props.image} alt={props.name} />
      </div>
      <hr />
      <div className="contentProduct">
        <ul>
          <li id="liProducts">
            <BigTitle><strong>{props.brand} {props.name}</strong> </BigTitle>
          </li>
          <li id="liProducts">
            ${props.price}
          </li>
        </ul>
      </div>
    

    <h1 onClick={() => props.addToCart(props.item)}><i id="productCart" className="fas fa-shopping-cart"></i></h1>
    </div>
 
  );
}
export default ProductCard;


// <Background>
//   <DisplayOver>
//     <BigTitle>Really Cool Title!</BigTitle>
//     <Hover>
//       <SubTitle>You could vacation here!</SubTitle>
//       <Paragraph>
//         More description about this really cool random desert photo from unsplash!
// </Paragraph>
//       <CTA>View More +</CTA>
//     </Hover>
//   </DisplayOver>
// </Background>