import React from "react";
// import {Container} from 'react-bootstrap';
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "../MShirts/MShirts.css";
import Cards from "../../components/Cards/Cards";

function MShirts() {
    const [items, setItems] = useState{[]}
    
    useEffect(() => {
        loadItems()
      }, [])

      function loadItems() {
        API.getById()
          .then(res => 
            setItems(res.data)
          )
          .catch(err => console.log(err));
      };

  return (
    <div>
      <h2 className="title">Men's Shirts</h2>
      <MDBContainer>
        <hr className="solid"></hr>
        <MDBRow style={{ borderLeft: "1px solid lightGray" }}>
          <MDBCol>
            <Cards 
                 {...items.map(item=><Card item={item}/>)}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default MShirts;
