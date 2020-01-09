import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
import cardTopImg from '../../images/neontriangle.jpeg'
import "./style.css"
import AuthContext from '../../contexts/AuthContext';
import Gravatar from 'react-gravatar';



class UserCard extends Component {
static contextType = AuthContext;

state = {
  flipped: false
}

handleFlipping = () => {
  this.setState({ flipped: !this.state.flipped });
}

render() {
  const colStyle = { maxWidth: "22rem" };
  const { user } = this.context;

  return (
    <MDBRow>
      <MDBCol style={{ minHeight: '26rem' }}>
          <MDBCard className="face front shadow-lg">
            <MDBCardUp>
            <img className="card-img-top" src={cardTopImg} alt="" />
            </MDBCardUp>
            <div className="">
            <div className="AVApadding">
            <MDBAvatar className="mx-auto white" circle>
              <Gravatar className="rounded-circle" email={user ? user.email : "loading ...."} size={150} />
            </MDBAvatar>
            </div>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">{ user ? user.name : "loading..." }</h4>
            </MDBCardBody>
            </div>
          </MDBCard>
          <MDBCard className="face back">
          </MDBCard>
      </MDBCol>
    </MDBRow>
    )
  }
}

export default UserCard;








