import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBAvatar } from 'mdbreact';
import AuthContext from '../../contexts/AuthContext';
import Gravatar from 'react-gravatar';


class NarrowCard extends Component {
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
          <MDBCol>
            <MDBCard wide>
            <MDBAvatar className="mx-auto white" circle>
            <Gravatar className="" email={user ? user.email : "loading ...."} size={150} />
            </MDBAvatar>
              <MDBCardBody cascade>
                <MDBCardTitle>MDBCard title</MDBCardTitle>
                <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>

          )}}


export default NarrowCard;