import React from "react";
import "./style.css"
import styled from "@emotion/styled/macro";


// const Background2 = styled.div({
//   // Other background code
//   [`:hover ${DisplayOver}`]: {
//     backgroundColor: "rgba(0,0,0,.5)",
//   },
//   [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
//     transform: "translate3d(0,0,0)",
//   },
//   [`:hover ${Hover}`]: {
//     opacity: 1,
//   },
// });


function ProductCard(props) {

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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width: "500px",
    height: "350px",
    cursor: "pointer",
    backgroundImage: `url(${props.image})`,
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

  return (
    <React.Fragment>
      <div className="card" id="productCard"><div className="img-container"><Background>
        <div className="contentProduct" id="liProducts"><DisplayOver>
          <BigTitle> {props.brand} {props.name} </BigTitle>
          <SubTitle> ${props.price} </SubTitle>

          <Hover>
            <Paragraph>
              {props.description}
            </Paragraph>
            <CTA><h1 onClick={() => props.addToCart(props.item)}><i id="productCart" className="fas fa-shopping-cart"></i></h1></CTA>
          </Hover>
          <SubTitle>
            ${props.price}
          </SubTitle>
        </DisplayOver></div>
      </Background></div></div>

      {/* <div className="card" id="productCard">
        <div className="img-container">
          <img id="watchList" src={props.image} alt={props.name} />
        </div>
        <hr />

        <div className="contentProduct">
          <ul>
            <li id="liProducts">

              <strong>{props.brand} {props.name}</strong>

            </li>
            <li id="liProducts">
              ${props.price}
            </li>
          </ul>
        </div>



      </div> */}
    </React.Fragment>
  );
}
export default ProductCard;