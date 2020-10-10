import React, { useEffect, useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../Product.css";
import Cards from "../../components/Cards/Cards";
import API from '../../lib/API'
const Wellness = props=> {
    const [items, setItems] = useState([])
    const  [first, setFirst] = useState("")

    useEffect(() => {
        const product = cFL(props.match.params.product);
        setFirst(product)
        loadItems()
        API.Products.getCategories(product)
        .then(res => {
          console.log(res.data)
          setItems(res.data)
        })
        .catch(err => console.log(err));
      }, [API.Products])

      function loadItems() {
       
      };
      function cFL(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  return (
    <div>
      <h2 className="title"> {first}</h2>
      <MDBContainer>
        <hr className="solid"></hr>
        <MDBRow style={{ borderLeft: "1px solid lightGray" }}>
          <MDBCol>
            <Cards 
                 items={items}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Wellness;
