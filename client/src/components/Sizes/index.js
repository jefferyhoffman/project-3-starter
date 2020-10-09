import React from "react";
import { MDBBtn } from "mdbreact";

const Sizes = (props) => {
    <div>
        return (
      {props.items.map(item => {
        return (
            <MDBBtn outline color="black" size="sm"
                key={item._id} item={item}
            />
        );
    }
    )});
</div>
}

export default Sizes;




{/* <MDBBtn outline color = "black" size = "sm">xs</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">s</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">m</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">l</MDBBtn>
          <MDBBtn outline color = "black" size = "sm">xl</MDBBtn> */}