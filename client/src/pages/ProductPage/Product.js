import React, { useCallback, useContext, useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import AddCart from '../../components/AddCart/AddCart'
import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../../components/Chatbot/ActionProvider';
import MessageParser from '../../components/Chatbot/MessageParser';
import config from '../../components/Chatbot/Config';
import API from "../../lib/API";
import AuthContext from '../../contexts/AuthContext';
const Product = props => {
  const context = useContext(AuthContext)
  // console.log("Does this work? ====>", context)
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("")
  const [colorArr, setColorArr] = useState([])
  const [sizes, setSizes] = useState([])
  const [size, setSize] = useState("")
  const [button, setButton] = useState("")
  useEffect(() => {
    API.Products.getProduct(props.match.params.id)
      .then(res => {
        setProduct(res.data)
        const allColors = []
        res.data.inventory.map(item => {
          if (allColors.includes(item.color)) return
          else if(item.color!=="N/A")allColors.push(item.color)
        })
        setColorArr(allColors)
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);
  useEffect(() => {
    if (color) {
      console.log("size changes")
      const newList = product.inventory.filter(prod => prod.color === color)
      console.log(newList)
      setSizes(newList)
    }
  }, [color])
  console.log("PROPS ===>", props);
  const cartAdd = () => {
    const id = props.match.params.id
    console.log(context.authToken)
    console.log("ID =====>", id)
    API.Users.addToCart(context.authToken, { product: { id: id }, color: {color}, size: {size} })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <MDBContainer fluid>
      <h2>{product.category}</h2>
      <hr className="solid"></hr>
      <MDBRow style={{ borderLeft: "1px solid lightGray", margin: "auto" }}>
        <MDBCol>
          <img src={`/images/${product.photo}`} />
        </MDBCol>
        <MDBCol>
          <h4 style={{ fontWeight: "bold" }}>{product.name}</h4>
          {/* <h6>{product.inventory && product.inventory[3].color}</h6> */}
          {colorArr.map(buttonColor => {
            return buttonColor === color ? (
              <MDBBtn color="white" size="sm" onClick={() => setColor(buttonColor)} active>{buttonColor}</MDBBtn>
            ) : (
              <MDBBtn color="white" size="sm" onClick={() => setColor(buttonColor)}>{buttonColor}</MDBBtn>
            )
          })}
          <h6>${product.price}</h6>
          <hr className="solid"></hr>
          {color && (
            <>
              <h6>Select Size</h6>
              {sizes.map(prod => {
                return prod.size === size ? (
                  <MDBBtn color="white" size="sm" onClick={() => setSize(prod.size)} active>{prod.size}</MDBBtn>
                ) : (
                  <MDBBtn color="white" size="sm" onClick={() => setSize(prod.size)}>{prod.size}</MDBBtn>
                )
              })}
            </>
          )}
          {/* <MDBBtn outline color = "black" size = "sm">s</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">m</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">l</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">xl</MDBBtn> */}
          <MDBBtn color="black" size="lg" style={{ marginTop: "20px", marginBottom: "20px" }} onClick={cartAdd}>Add to Cart</MDBBtn>
          <h6 style={{ fontWeight: "bold" }}>Product Details</h6>
          <p>{product.description}</p>
          {/* <AddCart/> */}
          <i className="far fa-comments" style={{ textDecoration: "underline", fontSize: 20 }}> live chat</i>
          {/* <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Product;