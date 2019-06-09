import React from "react";
import "./style.css"
import styled from "@emotion/styled/macro";


function ProductCard(props) {

  const DisplayOver = styled.div({
    height: "450px",
    left: "0",
    position: "absolute",
    top: "-13px",
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
    color: "white",
    height: "100px",
  });

  const Hover = styled.div({
    opacity: 0,
    height: "300px",
    transition: "opacity 350ms ease",
  });

  const SubTitle = styled.h4({
    fontFamily: "Helvetica",
    transform: "translate3d(0,50px,0)",
    color: "white",
    transition: "transform 350ms ease",
  });

  const Paragraph = styled.p({
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    maxHeight: "200px",
    color: "white",
    overflow: "auto",
  });

  const CTA = styled.a({
    position: "absolute",
    color: "white",
    bottom: "20px",
    left: "20px",
  });

  const Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width: "100%",
    height: "430px",
    cursor: "pointer",
    backgroundImage: `url(${props.image})`,
    [`:hover ${DisplayOver}`]: {
      backgroundColor: "rgba(0,0,0,.5)",
    },
    [`:hover ${SubTitle} :hover ${Paragraph}`]: {
      transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
      opacity: 1,
    },
  });


  return (
    <React.Fragment>
      <div className="card" id="productCardT"><div className="img-containerT max-width-100"><Background>
        <div className="contentProduct max-width-100" id="liProducts"><DisplayOver>
          
          <Hover>
          <BigTitle> {props.brand} {props.name} </BigTitle>
            <Paragraph> {props.description} </Paragraph>
            <SubTitle> ${props.price} </SubTitle>
            <CTA><h1 onClick={() => props.addToCart(props.item)}><i id="productCart" className="fas fa-shopping-cart"></i></h1></CTA>
          </Hover>

        </DisplayOver></div>
      </Background></div></div>

    </React.Fragment>
  );
}
export default ProductCard;