import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
import guy from '../../images/Linus-Torvalds-2012.jpg'
import cardTopImg from '../../images/mulitsymbols.png'
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
        <MDBRotatingCard flipped={this.state.flipped} className="text-center h-100 w-100" style={colStyle}>
          <MDBCard className="face front shadow-lg">
            <MDBCardUp>
            <img className="card-img-top" src={cardTopImg} alt="" />
            </MDBCardUp>
            <MDBAvatar className="mx-auto white" circle>

              {/*<img src={guy} alt="" className="rounded-circle" />*/}
              <Gravatar className="rounded-circle" email={user ? user.email : "loading ...."} size={150} />

            </MDBAvatar>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">{ user ? user.name : "loading..." }</h4>
              <a href="#!" className="rotate-btn ColorForRotate" data-card="card-1" onClick={this.handleFlipping}>
                <MDBIcon icon="redo" />
              </a>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="face back">
            <MDBCardBody>
              <h4 className="font-weight-bold">About { user ? user.name : "loading..." }:</h4>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                dolores nihil quae in mollitia asperiores ut rerum
                repellendus, voluptatum eum, officia laudantium quaerat?
              </p>
              <hr />
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg fb-ic">
                    <MDBIcon icon="facebook" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg tw-ic">
                    <MDBIcon icon="twitter" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg gplus-ic">
                    <MDBIcon icon="google-plus" brand />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg li-ic">
                    <MDBIcon icon="linkedin" brand />
                  </a>
                </li>
              </ul>
              <a href="#!" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
                <MDBIcon icon="undo" /> Click here to rotate back
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBRotatingCard>
      </MDBCol>
    </MDBRow>
    )
  }
}

export default UserCard;








