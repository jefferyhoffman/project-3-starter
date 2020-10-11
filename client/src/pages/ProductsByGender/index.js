import React, { useEffect, useState } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../Product.css";
import Cards from "../../components/Cards/Cards";
import API from '../../lib/API'

const ProductsByGender = props=> {
    const [items, setItems] = useState([])
    const  [all, setAll] = useState("")

    useEffect(() => {
        const gender = cFL(props.match.params.gender);
        setAll(gender)
        API.Products.getAllByGender(gender)
        .then(res => {
          console.log(res.data)
          setItems(res.data)
        })
        .catch(err => console.log(err));
      }, [API.Products])

      function cFL(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  return (
    <div>
      <h2 className="title"> {all} Apparel</h2>
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
export default ProductsByGender;
